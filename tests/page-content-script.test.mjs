import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import test from 'node:test';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const builtPages = ['dist/index.html', 'dist/labs/index.html'];
const pageContentAssetPattern =
  /^\/_astro\/PageContent\.astro_astro_type_script_index_0_lang\.[^/]+\.js$/;
const pageContentSignatures = ['contact-form', 'maps.googleapis.com/maps/api/js', 'bokeh-canvas'];

function extractScripts(html) {
  return [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)].map(
    ([, attributes, body]) => ({ attributes, body }),
  );
}

function getAttribute(attributes, name) {
  const match = attributes.match(new RegExp(`\\b${name}\\s*=\\s*(["'])(.*?)\\1`, 'i'));
  return match?.[2];
}

function createElement(tagName = 'div') {
  const listeners = new Map();

  return {
    tagName: tagName.toUpperCase(),
    style: {},
    listeners,
    addEventListener(type, listener) {
      listeners.set(type, listener);
    },
  };
}

function createBrowserHarness() {
  const submitButton = createElement('button');
  submitButton.disabled = false;
  submitButton.textContent = 'Send';

  const errorAlert = createElement();
  errorAlert.style.display = 'none';
  const successAlert = createElement();
  successAlert.style.display = 'none';

  const contactForm = createElement('form');
  contactForm.action = 'https://formspree.io/f/maylavkd';
  contactForm.resetCount = 0;
  contactForm.querySelector = (selector) => {
    if (selector === 'button[type="submit"]') return submitButton;
    if (selector === '.alert-error') return errorAlert;
    if (selector === '.alert-success') return successAlert;
    return null;
  };
  contactForm.reset = () => {
    contactForm.resetCount += 1;
  };

  const mapButton = createElement('button');
  const mapLoader = createElement();
  mapLoader.style.display = 'flex';
  const mapContainer = createElement();

  const canvasContext = {
    arcCalls: [],
    clearRectCalls: [],
    fillCalls: 0,
    gradients: [],
    beginPath() {},
    arc(...args) {
      this.arcCalls.push(args);
    },
    clearRect(...args) {
      this.clearRectCalls.push(args);
    },
    createRadialGradient(...args) {
      const gradient = {
        args,
        colorStops: [],
        addColorStop(offset, color) {
          this.colorStops.push([offset, color]);
        },
      };
      this.gradients.push(gradient);
      return gradient;
    },
    fill() {
      this.fillCalls += 1;
    },
    fillStyle: '',
  };

  const canvasParent = { offsetWidth: 800, offsetHeight: 600 };
  const canvas = createElement('canvas');
  canvas.width = 300;
  canvas.height = 150;
  canvas.parentElement = canvasParent;
  canvas.getContext = (kind) => (kind === '2d' ? canvasContext : null);

  const elementsById = new Map([
    ['contact-form', contactForm],
    ['map', mapContainer],
    ['bokeh-canvas', canvas],
  ]);
  const elementsBySelector = new Map([
    ['.map-load-btn', mapButton],
    ['.map-loader', mapLoader],
  ]);

  const domContentLoadedListeners = [];
  const windowListeners = new Map();
  const appendedScripts = [];
  const animationFrames = [];
  const intersectionObservers = [];

  const document = {
    body: {
      classList: {
        contains(className) {
          return className === 'mode-films';
        },
      },
    },
    head: {
      appendChild(element) {
        appendedScripts.push(element);
        return element;
      },
    },
    addEventListener(type, listener) {
      if (type === 'DOMContentLoaded') domContentLoadedListeners.push(listener);
    },
    createElement,
    getElementById(id) {
      return elementsById.get(id) ?? null;
    },
    querySelector(selector) {
      return elementsBySelector.get(selector) ?? null;
    },
  };

  class FakeIntersectionObserver {
    constructor(callback) {
      this.callback = callback;
      this.disconnected = false;
      this.observed = [];
      intersectionObservers.push(this);
    }

    disconnect() {
      this.disconnected = true;
    }

    observe(element) {
      this.observed.push(element);
    }
  }

  class FakeFormData {
    constructor(form) {
      this.form = form;
    }
  }

  const deterministicMath = Object.create(Math);
  deterministicMath.random = () => 0.5;

  const sandbox = {
    console,
    document,
    FormData: FakeFormData,
    IntersectionObserver: FakeIntersectionObserver,
    Math: deterministicMath,
    requestAnimationFrame(callback) {
      animationFrames.push(callback);
      return animationFrames.length;
    },
    fetch() {
      throw new Error('Unexpected unstubbed fetch');
    },
    addEventListener(type, listener) {
      windowListeners.set(type, listener);
    },
  };
  sandbox.window = sandbox;

  return {
    animationFrames,
    appendedScripts,
    canvas,
    canvasContext,
    canvasParent,
    contactForm,
    context: vm.createContext(sandbox),
    domContentLoadedListeners,
    errorAlert,
    FakeFormData,
    intersectionObservers,
    mapButton,
    mapContainer,
    mapLoader,
    sandbox,
    submitButton,
    successAlert,
    windowListeners,
  };
}

test('PageContent emits one valid module and preserves its browser behavior', async () => {
  const pageContentSources = [];

  for (const relativePage of builtPages) {
    const html = readFileSync(path.join(projectRoot, relativePage), 'utf8');
    const scripts = extractScripts(html);

    for (const [index, script] of scripts.entries()) {
      const type = getAttribute(script.attributes, 'type');
      const source = getAttribute(script.attributes, 'src');
      if (!source && type !== 'application/ld+json' && type !== 'module') {
        assert.doesNotThrow(
          () => new vm.Script(script.body, { filename: `${relativePage}:inline-${index + 1}` }),
          `${relativePage} classic inline script ${index + 1} must be valid browser JavaScript`,
        );
      }
    }

    const pageContentScripts = scripts.filter((script) => {
      const source = getAttribute(script.attributes, 'src');
      return source && pageContentAssetPattern.test(source);
    });

    assert.equal(pageContentScripts.length, 1, `${relativePage} must reference PageContent once`);
    assert.equal(
      getAttribute(pageContentScripts[0].attributes, 'type'),
      'module',
      `${relativePage} PageContent script must be a module`,
    );
    assert.ok(
      scripts
        .filter((script) => !getAttribute(script.attributes, 'src'))
        .every((script) => pageContentSignatures.every((signature) => !script.body.includes(signature))),
      `${relativePage} must not contain the PageContent logic in a classic inline script`,
    );

    pageContentSources.push(getAttribute(pageContentScripts[0].attributes, 'src'));
  }

  assert.equal(
    new Set(pageContentSources).size,
    1,
    'the films and labs pages must share the same PageContent module',
  );

  const assetPath = path.join(projectRoot, 'dist', pageContentSources[0].replace(/^\//, ''));
  assert.ok(existsSync(assetPath), `compiled PageContent asset must exist at ${assetPath}`);

  const syntaxCheck = spawnSync(process.execPath, ['--check', assetPath], { encoding: 'utf8' });
  assert.equal(
    syntaxCheck.status,
    0,
    `compiled PageContent asset must pass node --check:\n${syntaxCheck.stderr}`,
  );

  const compiledScript = readFileSync(assetPath, 'utf8');
  const harness = createBrowserHarness();
  new vm.Script(compiledScript, { filename: assetPath }).runInContext(harness.context);

  assert.equal(harness.canvas.width, 800, 'bokeh must size the canvas to its container width');
  assert.equal(harness.canvas.height, 600, 'bokeh must size the canvas to its container height');
  assert.equal(harness.animationFrames.length, 1, 'bokeh must queue its initial animation frame');

  harness.canvasParent.offsetWidth = 1024;
  harness.canvasParent.offsetHeight = 768;
  harness.windowListeners.get('resize')();
  assert.equal(harness.canvas.width, 1024, 'bokeh must resize with its container width');
  assert.equal(harness.canvas.height, 768, 'bokeh must resize with its container height');

  const firstFrame = harness.animationFrames.shift();
  firstFrame(1000);
  assert.equal(harness.canvasContext.clearRectCalls.length, 1, 'bokeh must clear before drawing');
  assert.ok(harness.canvasContext.arcCalls.length > 0, 'bokeh must draw at least one orb');
  assert.equal(harness.canvasContext.fillCalls, harness.canvasContext.arcCalls.length);
  assert.equal(harness.animationFrames.length, 1, 'bokeh must queue one successor frame');

  assert.equal(harness.domContentLoadedListeners.length, 1);
  harness.domContentLoadedListeners[0]();
  assert.equal(harness.intersectionObservers.length, 1, 'map must install its visibility observer');
  assert.deepEqual(harness.intersectionObservers[0].observed, [harness.mapContainer]);
  assert.equal(harness.appendedScripts.length, 0, 'map must not load before user/observer interaction');

  const submitHandler = harness.contactForm.listeners.get('submit');
  assert.equal(typeof submitHandler, 'function', 'contact form must install its submit handler');

  let successFetch;
  harness.sandbox.fetch = async (url, options) => {
    successFetch = { url, options };
    return { ok: true };
  };
  const successEvent = {
    defaultPrevented: false,
    target: harness.contactForm,
    preventDefault() {
      this.defaultPrevented = true;
    },
  };
  await submitHandler(successEvent);

  assert.equal(successEvent.defaultPrevented, true);
  assert.equal(successFetch.url, harness.contactForm.action);
  assert.equal(successFetch.options.method, 'POST');
  assert.equal(successFetch.options.headers.Accept, 'application/json');
  assert.ok(successFetch.options.body instanceof harness.FakeFormData);
  assert.equal(successFetch.options.body.form, harness.contactForm);
  assert.equal(harness.successAlert.style.display, 'block');
  assert.equal(harness.errorAlert.style.display, 'none');
  assert.equal(harness.contactForm.resetCount, 1);
  assert.equal(harness.submitButton.disabled, false);
  assert.equal(harness.submitButton.textContent, 'Send');

  harness.sandbox.fetch = async () => ({ ok: false });
  const errorEvent = {
    defaultPrevented: false,
    target: harness.contactForm,
    preventDefault() {
      this.defaultPrevented = true;
    },
  };
  await submitHandler(errorEvent);

  assert.equal(errorEvent.defaultPrevented, true);
  assert.equal(harness.errorAlert.style.display, 'block');
  assert.equal(harness.successAlert.style.display, 'none');
  assert.equal(harness.contactForm.resetCount, 1, 'failed submissions must not reset the form');
  assert.equal(harness.submitButton.disabled, false);
  assert.equal(harness.submitButton.textContent, 'Send');

  const mapLoadHandler = harness.mapButton.listeners.get('click');
  assert.equal(typeof mapLoadHandler, 'function', 'map button must install its click handler');
  mapLoadHandler();
  assert.equal(harness.appendedScripts.length, 1, 'one click must append one Maps loader');
  assert.equal(harness.appendedScripts[0].async, true);
  assert.match(harness.appendedScripts[0].src, /^https:\/\/maps\.googleapis\.com\/maps\/api\/js\?/);
  assert.match(harness.appendedScripts[0].src, /(?:\?|&)callback=initMap(?:&|$)/);
  assert.equal(harness.mapLoader.style.display, 'none');

  const maps = [];
  const markers = [];
  const infoWindows = [];

  class FakeMap {
    constructor(element, options) {
      this.element = element;
      this.options = options;
      maps.push(this);
    }
  }

  class FakeMarker {
    constructor(options) {
      this.options = options;
      this.listeners = new Map();
      markers.push(this);
    }

    addListener(type, listener) {
      this.listeners.set(type, listener);
    }
  }

  class FakeInfoWindow {
    constructor(options) {
      this.options = options;
      this.openCalls = [];
      infoWindows.push(this);
    }

    open(options) {
      this.openCalls.push(options);
    }
  }

  harness.sandbox.google = {
    maps: {
      Map: FakeMap,
      InfoWindow: FakeInfoWindow,
      marker: { AdvancedMarkerElement: FakeMarker },
    },
  };
  assert.equal(typeof harness.sandbox.initMap, 'function');
  harness.sandbox.initMap();

  assert.equal(maps.length, 1);
  assert.equal(maps[0].element, harness.mapContainer);
  assert.equal(maps[0].options.zoom, 14);
  assert.equal(maps[0].options.center.lat, 40.4406);
  assert.equal(maps[0].options.center.lng, -79.9959);
  assert.equal(maps[0].options.mapId, 'be44c9d1f4868292');

  assert.equal(markers.length, 1);
  assert.equal(markers[0].options.map, maps[0]);
  assert.equal(markers[0].options.position.lat, 40.4406);
  assert.equal(markers[0].options.position.lng, -79.9959);
  assert.equal(markers[0].options.title, 'Sneaky Ghost Films HQ');
  assert.equal(markers[0].options.content.style.width, '48px');
  assert.equal(markers[0].options.content.style.height, '48px');

  assert.equal(infoWindows.length, 1);
  assert.equal(infoWindows[0].options.content, '<b>Sneaky Ghost Films HQ</b><br>Pittsburgh, PA');
  markers[0].listeners.get('click')();
  assert.equal(infoWindows[0].openCalls.length, 1);
  assert.equal(infoWindows[0].openCalls[0].anchor, markers[0]);
  assert.equal(infoWindows[0].openCalls[0].map, maps[0]);
  assert.equal(infoWindows[0].openCalls[0].shouldFocus, false);
});
