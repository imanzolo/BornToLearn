/* ============================================================
   Born to Learn — shared shell and interactions
   Header and footer are injected from here so that adding a page
   never means editing navigation in eight files.
   ============================================================ */
(function () {
  'use strict';

  var SOCIAL = {
    instagram: 'https://www.instagram.com/borntolearn.official',
    tiktok: 'https://www.tiktok.com/@b0rntolearn'
  };

  var NAV = [
    ['Home', 'index.html', 'home'],
    ['IELTS', 'ielts.html', 'ielts'],
    ['SAT', 'sat.html', 'sat'],
    ['General English', 'general.html', 'general'],
    ['Practice tests', 'tests.html', 'tests'],
    ['Materials', 'materials.html', 'materials'],
    ['About', 'about.html', 'about']
  ];

  var IG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="2.5" width="19" height="19" rx="5.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none"/></svg>';
  var TT = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.6 2h-3v13.1a2.9 2.9 0 1 1-2.4-2.85V9.15a6 6 0 1 0 5.4 5.97V8.9a7.1 7.1 0 0 0 4.1 1.3V7.2a4.2 4.2 0 0 1-4.1-4.2V2z"/></svg>';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- chrome ---------- */
  function links(active, cls) {
    return NAV.map(function (n) {
      return '<a href="' + n[1] + '"' + (n[2] === active ? ' class="on" aria-current="page"' : '') + '>' + n[0] + '</a>';
    }).join('');
  }

  function socialLinks(cls) {
    return '<a href="' + SOCIAL.instagram + '" target="_blank" rel="noopener" aria-label="Born to Learn on Instagram">' + IG +
           (cls ? '<span>Instagram</span>' : '') + '</a>' +
           '<a href="' + SOCIAL.tiktok + '" target="_blank" rel="noopener" aria-label="Born to Learn on TikTok">' + TT +
           (cls ? '<span>TikTok</span>' : '') + '</a>';
  }

  function mountHeader(active) {
    var h = document.createElement('header');
    h.className = 'hdr';
    h.innerHTML =
      '<div class="wrap hdr-in">' +
        '<a class="logo" href="index.html" aria-label="Born to Learn home">' +
          '<img src="assets/logo.png" alt="Born to Learn">' +
        '</a>' +
        '<nav class="nav">' + links(active) + '</nav>' +
        '<div class="social">' + socialLinks() + '</div>' +
        '<button class="burger" id="burger" aria-label="Open menu" aria-expanded="false"><i></i></button>' +
      '</div>' +
      '<div class="drawer" id="drawer"><div class="wrap"><nav>' + links(active) + '</nav></div></div>';
    document.body.insertBefore(h, document.body.firstChild);

    var b = document.getElementById('burger'), d = document.getElementById('drawer');
    b.addEventListener('click', function () {
      var open = d.classList.toggle('on');
      b.classList.toggle('on', open);
      b.setAttribute('aria-expanded', open ? 'true' : 'false');
      b.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
  }

  function mountFooter() {
    var f = document.createElement('footer');
    f.className = 'ftr';
    f.innerHTML =
      '<div class="wrap"><div class="ftr-in">' +
        '<div class="about">' +
          '<a class="logo" href="index.html"><img src="assets/logo.png" alt="Born to Learn"></a>' +
          '<p>An online academy for English, IELTS and SAT. Live classes with a teacher, practice you can do at three in the morning.</p>' +
          '<div class="ftr-social">' + socialLinks(true) + '</div>' +
        '</div>' +
        '<div><h5>Study</h5><ul>' +
          '<li><a href="ielts.html">IELTS</a></li>' +
          '<li><a href="sat.html">SAT</a></li>' +
          '<li><a href="general.html">General English</a></li>' +
        '</ul></div>' +
        '<div><h5>Practise</h5><ul>' +
          '<li><a href="tests.html">Practice tests</a></li>' +
          '<li><a href="materials.html">Materials</a></li>' +
          '<li><a href="tests.html?exam=ielts">IELTS mock tests</a></li>' +
        '</ul></div>' +
        '<div><h5>Academy</h5><ul>' +
          '<li><a href="about.html">About us</a></li>' +
          '<li><a href="about.html#contact">Contact</a></li>' +
          '<li><a href="' + SOCIAL.instagram + '" target="_blank" rel="noopener">Instagram</a></li>' +
          '<li><a href="' + SOCIAL.tiktok + '" target="_blank" rel="noopener">TikTok</a></li>' +
        '</ul></div>' +
      '</div>' +
      '<div class="ftr-btm"><span>© 2026 Born to Learn</span>' +
      '<span>All practice material is written in-house.</span></div></div>';
    document.body.appendChild(f);
  }

  /* ---------- reveal on scroll ---------- */
  function reveals() {
    var els = [].slice.call(document.querySelectorAll('.rv'));
    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach(function (e) { e.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var group = en.target.parentElement;
        var sibs = [].slice.call(group.querySelectorAll(':scope > .rv'));
        var i = Math.max(0, sibs.indexOf(en.target));
        en.target.style.transitionDelay = (i * 70) + 'ms';
        en.target.classList.add('in');
        io.unobserve(en.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---------- ripple ---------- */
  function ripple() {
    document.addEventListener('click', function (e) {
      var b = e.target.closest('.btn');
      if (!b || reduce) return;
      var r = b.getBoundingClientRect(), d = Math.max(r.width, r.height);
      var s = document.createElement('span');
      s.className = 'rip';
      s.style.width = s.style.height = d + 'px';
      s.style.left = (e.clientX - r.left - d / 2) + 'px';
      s.style.top = (e.clientY - r.top - d / 2) + 'px';
      b.appendChild(s);
      setTimeout(function () { s.remove(); }, 620);
    });
  }

  /* ---------- band rail ---------- */
  function railPos(v) { return Math.max(0, Math.min(1, (v - 4) / 5)) * 100; }

  function rails() {
    [].slice.call(document.querySelectorAll('.rail')).forEach(function (r) {
      var to = parseFloat(r.dataset.mark || '7');
      var from = parseFloat(r.dataset.from || '4');
      var fill = r.querySelector('.rail-fill'), dot = r.querySelector('.rail-dot'), flag = r.querySelector('.rail-flag');
      function set(v) {
        var p = railPos(v) + '%';
        if (fill) fill.style.width = p;
        if (dot) dot.style.left = p;
        if (flag) { flag.style.left = p; flag.textContent = 'band ' + v.toFixed(1); }
      }
      set(from);
      var go = function () {
        if (reduce) { set(to); if (flag) flag.classList.add('on'); return; }
        setTimeout(function () { set(to); if (flag) flag.classList.add('on'); }, 260);
      };
      if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (en) {
          if (en[0].isIntersecting) { go(); io.disconnect(); }
        }, { threshold: 0.4 });
        io.observe(r);
      } else { go(); }
    });
  }

  /* ---------- count up ---------- */
  function counters() {
    [].slice.call(document.querySelectorAll('[data-count]')).forEach(function (el) {
      var to = parseInt(el.dataset.count, 10), suf = el.dataset.suffix || '';
      if (reduce) { el.textContent = to + suf; return; }
      var run = function () {
        var t0 = null, dur = 900;
        (function step(ts) {
          if (!t0) t0 = ts;
          var k = Math.min(1, (ts - t0) / dur);
          el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))) + suf;
          if (k < 1) requestAnimationFrame(step);
        })(performance.now());
      };
      if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (en) { if (en[0].isIntersecting) { run(); io.disconnect(); } }, { threshold: .5 });
        io.observe(el);
      } else { run(); }
    });
  }

  /* ---------- boot ---------- */
  window.BTL = {
    social: SOCIAL,
    reduce: reduce,
    init: function (active) {
      mountHeader(active);
      mountFooter();
      reveals();
      ripple();
      rails();
      counters();
    },
    /* re-scan after a page injects cards dynamically */
    rescan: function () { reveals(); rails(); counters(); }
  };
})();
