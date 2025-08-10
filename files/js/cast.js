/* CastGrid — renders from inline JSON; supports per-row column forcing via data-cols */
(function(){
  function el(p, tag, cls, attrs){
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (attrs) for (const k in attrs) n.setAttribute(k, attrs[k]);
    if (p) p.appendChild(n);
    return n;
  }
  const chunk = (a,n)=>a.reduce((r,_,i)=>(i%n?r[r.length-1].push(a[i]):r.push([a[i]]),r),[]);

  document.querySelectorAll('[data-cast]').forEach(block=>{
    const raw = block.querySelector('script[type="application/json"]');
    if (!raw) return;

    let data;
    try { data = JSON.parse(raw.textContent.trim()); }
    catch(e){ console.warn('Cast JSON parse failed', e); return; }

    // Optional: per-row explicit column counts, e.g. data-cols="7,6"
    const colsSpec = (block.dataset.cols || '')
      .split(',').map(s=>parseInt(s.trim(),10)).filter(Boolean);

    let rows = data.rows;
    if (!rows && Array.isArray(data.members)) {
      const per = parseInt(block.dataset.perRow || '0', 10);
      rows = per > 0 ? chunk(data.members, per) : [data.members];
    }
    if (!rows) return;

    block.classList.add('cast');

    rows.forEach((rowArr, i)=>{
      const row = el(block, 'div', 'cast__row');
      // If a specific column count is provided for this row, expose as --cols
      if (colsSpec[i]) row.style.setProperty('--cols', colsSpec[i]);

      rowArr.forEach(m=>{
        const card = el(row, 'figure', 'cast__card');
        const wrap = m.link ? el(card, 'a') : el(card, 'div');
        if (m.link) wrap.href = m.link;

        const img = el(wrap, 'img', 'cast__thumb', {
          src: m.img,
          alt: m.alt || `${m.name} headshot`,
          loading: 'lazy',
          decoding: 'async'
        });
        if (m.pos) img.style.objectPosition = m.pos;

        const cap = el(card, 'figcaption');
        el(cap, 'div', 'cast__name').textContent = m.name;
        if (m.role) el(cap, 'div', 'cast__role').textContent = m.role;
      });
    });
  });
})();