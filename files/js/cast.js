/* CastGrid — render cast from inline JSON */
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
    try { data = JSON.parse(raw.textContent.trim()); } catch (e) { console.warn("Cast JSON parse failed", e); return; }

    let rows = data.rows;
    if (!rows && Array.isArray(data.members)) {
      const per = parseInt(block.dataset.perRow || "0", 10);
      rows = per > 0 ? chunk(data.members, per) : [data.members];
    }
    if (!rows) return;

    block.classList.add('cast');
    rows.forEach(rowArr=>{
      const row = el(block, 'div', 'cast__row');
      rowArr.forEach(m=>{
        const card = el(row, 'figure', 'cast__card');
        const wrap = m.link ? el(card, 'a') : el(card, 'div');
        if (m.link) wrap.href = m.link;

        const img = el(wrap, 'img', 'cast__thumb', {
          src: m.img,
          alt: m.alt || `${m.name} headshot`,
          width: '200',
          height: '300',
          loading: 'lazy',
          decoding: 'async'
        });
        if (m.pos) img.style.objectPosition = m.pos; // e.g., "50% 30%"

        const cap = el(card, 'figcaption');
        el(cap, 'div', 'cast__name').textContent = m.name;
        if (m.role) el(cap, 'div', 'cast__role').textContent = m.role;
      });
    });
  });
})();