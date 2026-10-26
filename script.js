// ---- Site-wide settings: edit your details here once and every page updates ----
const SITE = {
  name: 'Fahad',
  email: 'fahadriazcs@gmail.com',
  whatsapp: { label: '+44 7460 671890', number: '447460671890' },
  linkedin: 'fahad-riaz-b52359282',
  // EmailJS (free): paste your IDs from emailjs.com. Leave empty to fall back to FormSubmit.
  emailjs: {
    publicKey: '6xVirZWFtjSFMPYdU', // Account → General → Public Key
    serviceId: 'service_9vfmaq8', // Email Services → your Gmail service → Service ID
    notifyTemplate: 'template_sxfndpb', // Template that emails YOU about the new enquiry
    replyTemplate: 'template_b1wzk7f', // Template that sends the customer the welcome + confirmation
  },
};

(() => {
  // Resolve links relative to this script so pages in sub-folders (projects/) work too
  const base = new URL('.', document.currentScript.src).href;
  const url = (path) => base + path;
  const page = document.body.dataset.page;
  const arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>';
  const links = [
    ['projects', 'Projects'],
    ['services', 'Services'],
    ['about', 'About'],
    ['contact', 'Contact'],
  ];
  const contacts = [
    ['Email', `mailto:${SITE.email}`, SITE.email],
    ['WhatsApp', `https://wa.me/${SITE.whatsapp.number}`, SITE.whatsapp.label],
  ];
  const ICONS = {
    Email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6.5 8.5 6.5 8.5-6.5"/></svg>',
    WhatsApp: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.13-.27-.2-.57-.35M12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89a11.82 11.82 0 0 0-3.48-8.41Z"/></svg>',
    LinkedIn: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>',
  };
  const socials = [
    ['WhatsApp', `https://wa.me/${SITE.whatsapp.number}`],
    ['LinkedIn', `https://www.linkedin.com/in/${SITE.linkedin}`],
  ];
  const ext = (href) => (href.startsWith('http') ? ' target="_blank" rel="noopener noreferrer"' : '');
  const iconLink = ([label, href], cls) => `<a class="${cls}" href="${href}"${ext(href)} aria-label="${label === 'Email' ? 'Email ' + SITE.name : label === 'WhatsApp' ? 'Message ' + SITE.name + ' on WhatsApp' : SITE.name + ' on ' + label}" title="${label}">${ICONS[label]}</a>`;

  // Header
  const headerSlot = document.querySelector('[data-site-header]');
  if (headerSlot) {
    headerSlot.outerHTML = `
      <header class="header">
        <a class="logo" aria-label="${SITE.name}, home" href="${url('index.html')}"><span class="logo-mark" aria-hidden="true"><i></i><i></i></span>${SITE.name}<span class="logo-dot">.</span></a>
        <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="navigation"><span></span><span></span><span></span></button>
        <nav class="navigation" id="navigation" aria-label="Main navigation">
          ${links.map(([key, label]) => `<a href="${url(key + '.html')}"${page === key ? ' aria-current="page"' : ''}>${label}</a>`).join('')}
          <a class="button button-dark header-cta" href="${url('contact.html')}">Let's Talk</a>
        </nav>
      </header>`;
  }

  // Contact block + footer
  const footerSlot = document.querySelector('[data-site-footer]');
  if (footerSlot) {
    footerSlot.outerHTML = `
      <section class="contact" id="contact" aria-labelledby="contact-title" data-header-dark>
        <div class="shell">
          <div class="contactGrid" data-reveal="stagger">
            <div>
              <p class="eyebrow">LET'S MAKE SOMETHING GOOD.</p>
              <h2 class="contactHeading" id="contact-title">Have a project<br><span>in mind?</span></h2>
              <a class="contactLink" href="${url('contact.html#contact-form')}">Let's work together.${arrow}</a>
            </div>
            <div class="contactDetails">
              <p class="contactDetailsTitle" id="contact-details">Contact</p>
              <ul class="contactList" aria-labelledby="contact-details">
                ${contacts.map(([label, href, text]) => `<li><span class="contactLabel">${label}</span><div class="contactValueRow"><a class="contactValue" href="${href}"${ext(href)}>${text}</a></div></li>`).join('')}
                <li><span class="contactLabel">Connect</span><div class="socialIcons">${socials.map((s) => iconLink(s, 'socialIcon')).join('')}</div></li>
              </ul>
            </div>
          </div>
          <footer class="footer" data-reveal>
            <p class="footerBrand">${SITE.name}.</p>
            <nav class="footerContact footerIcons" aria-label="Contact">
              ${[['Email', `mailto:${SITE.email}`], ...socials].map((s) => iconLink(s, 'socialIcon small')).join('')}
            </nav>
            <nav class="footerNav" aria-label="Footer">
              ${links.map(([key, label]) => `<a href="${url(key + '.html')}">${label}</a>`).join('')}
            </nav>
            <a class="footerTop" href="#main-content">Back to top <span aria-hidden="true">↑</span></a>
          </footer>
        </div>
      </section>`;
  }
  document.querySelectorAll('[data-whatsapp-link]').forEach((a) => { a.href = `https://wa.me/${SITE.whatsapp.number}`; });

  // ---------- WhatsApp chat widget ----------
  {
    const msg = encodeURIComponent(`Hi ${SITE.name}, I found your portfolio and would like to discuss a project.`);
    const waHref = `https://wa.me/${SITE.whatsapp.number}?text=${msg}`;
    const wa = document.createElement('div');
    wa.className = 'waWidget';
    wa.innerHTML = `
      <div class="waCard" id="wa-card" role="dialog" aria-label="Chat on WhatsApp" hidden>
        <div class="waHead">
          <img src="${url('assets/profile-640.webp')}" alt="" width="40" height="40">
          <div><b>${SITE.name}</b><span>Typically replies within a few hours</span></div>
          <button class="waClose" type="button" aria-label="Close chat">×</button>
        </div>
        <div class="waBody"><p class="waBubble">Hi there 👋<br>Have a project in mind? Send me a message on WhatsApp and let's talk.</p></div>
        <a class="waStart" href="${waHref}" target="_blank" rel="noopener noreferrer">${ICONS.WhatsApp}Start chat</a>
      </div>
      <button class="waFab" type="button" aria-label="Chat on WhatsApp" aria-expanded="false" aria-controls="wa-card">${ICONS.WhatsApp}</button>`;
    document.body.append(wa);
    const card = wa.querySelector('.waCard'), fab = wa.querySelector('.waFab');
    const toggle = (open) => {
      card.hidden = !open;
      requestAnimationFrame(() => wa.classList.toggle('open', open));
      fab.setAttribute('aria-expanded', String(open));
      if (open) wa.querySelector('.waStart').focus({ preventScroll: true });
    };
    fab.addEventListener('click', () => toggle(card.hidden));
    wa.querySelector('.waClose').addEventListener('click', () => { toggle(false); fab.focus(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !card.hidden) { toggle(false); fab.focus(); } });
    document.addEventListener('click', (e) => { if (!card.hidden && !wa.contains(e.target)) toggle(false); });
  }
  document.querySelectorAll('[data-email-link]').forEach((a) => { a.href = `mailto:${SITE.email}${a.dataset.emailLink}`; });

  const header = document.querySelector('.header');
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('navigation');

  // Mobile menu
  const setMenu = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    nav.classList.toggle('is-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

  // Project category filter (projects page); ?category=apps preselects a tab
  const buttons = document.querySelectorAll('.categoryButton');
  const projects = document.querySelectorAll('.project[data-category]');
  const status = document.getElementById('project-status');
  const filterProjects = (category) => {
    let count = 0;
    projects.forEach((p) => {
      const show = category === 'all' || p.dataset.category === category;
      p.hidden = !show;
      if (show) count++;
    });
    buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filter === category)));
    const label = [...buttons].find((b) => b.dataset.filter === category)?.textContent;
    if (status) status.textContent = `${label}: showing ${count} projects.`;
  };
  if (buttons.length) {
    buttons.forEach((b) => b.addEventListener('click', () => filterProjects(b.dataset.filter)));
    const requested = new URLSearchParams(location.search).get('category');
    const valid = [...buttons].some((b) => b.dataset.filter === requested);
    filterProjects(valid ? requested : buttons[0].dataset.filter);
  }

  // Contact form: validates in the browser, then sends via EmailJS (or FormSubmit as a fallback)
  const form = document.querySelector('[data-contact-form]');
  if (form) {
    const status = form.querySelector('.formStatus');
    const submit = form.querySelector('.formSubmit');
    const fail = (msg) => { status.className = 'formStatus error'; status.innerHTML = msg; };
    const validate = () => {
      let firstBad = null;
      form.querySelectorAll('[data-required]').forEach((wrap) => {
        const field = wrap.querySelector('input:not([type=radio]), textarea, select');
        const radios = wrap.querySelectorAll('input[type=radio]');
        let ok = radios.length ? [...radios].some((r) => r.checked) : field.value.trim() !== '';
        if (ok && field && field.type === 'email') ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());
        wrap.classList.toggle('invalid', !ok);
        if (!ok && !firstBad) firstBad = radios[0] || field;
      });
      if (firstBad) firstBad.focus();
      return !firstBad;
    };
    form.addEventListener('input', (e) => e.target.closest('[data-required]')?.classList.remove('invalid'));
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      status.className = 'formStatus'; status.textContent = '';
      if (!validate()) return;
      const data = Object.fromEntries(new FormData(form));
      if (data._honey) return; // bot filled the hidden field
      submit.disabled = true; submit.firstChild.textContent = 'Sending… ';
      try {
        const ej = SITE.emailjs || {};
        if (ej.publicKey && ej.serviceId && ej.notifyTemplate) {
          const params = {
            ...data,
            first_name: data.name.trim().split(/\s+/)[0],
            phone: data.phone || 'Not provided', company: data.company || 'Not provided',
            submitted_at: new Date().toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' }),
            page_url: location.href, owner_name: SITE.name, owner_email: SITE.email,
            owner_whatsapp: SITE.whatsapp.label, whatsapp_link: `https://wa.me/${SITE.whatsapp.number}`,
          };
          delete params._honey;
          const send = (template_id) => fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ service_id: ej.serviceId, template_id, user_id: ej.publicKey, template_params: params }),
          }).then(async (r) => { if (!r.ok) throw new Error(await r.text()); });
          await send(ej.notifyTemplate);                       // must succeed: you get the enquiry
          if (ej.replyTemplate) await send(ej.replyTemplate).catch(() => {}); // confirmation is best-effort
        } else {
          data._subject = `New project enquiry from ${data.name}`;
          data._template = 'table';
          const res = await fetch(`https://formsubmit.co/ajax/${SITE.email}`, {
            method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data),
          });
          const json = await res.json().catch(() => ({}));
          if (!res.ok || String(json.success) !== 'true') throw new Error(json.message || res.statusText);
        }
        form.innerHTML = `<div class="formSuccess" role="status"><h3>Thanks, ${data.name.split(' ')[0].replace(/[<>&]/g, '')}!</h3><p>Your enquiry is on its way${SITE.emailjs && SITE.emailjs.replyTemplate ? ', and a confirmation email is heading to your inbox' : ''}. I'll get back to you within one working day. If it's urgent, message me on <a href="https://wa.me/${SITE.whatsapp.number}" target="_blank" rel="noopener noreferrer">WhatsApp</a>.</p></div>`;
      } catch {
        fail(`Sorry, the message couldn't be sent. Please email me at <a href="mailto:${SITE.email}">${SITE.email}</a> or message me on <a href="https://wa.me/${SITE.whatsapp.number}" target="_blank" rel="noopener noreferrer">WhatsApp</a>.`);
        submit.disabled = false; submit.firstChild.textContent = 'Send enquiry ';
      }
    });
  }

  // Duplicate marquee groups so the CSS loop (translate -50%) is seamless
  document.querySelectorAll('.marqueeTrack, .feedbackMarqueeTrack').forEach((track) => {
    const clone = track.firstElementChild.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    clone.removeAttribute('aria-label');
    clone.querySelectorAll('a').forEach((a) => a.setAttribute('tabindex', '-1'));
    clone.dataset.clone = '';
    track.appendChild(clone);
  });

  // ---------- Project screens slider: scroll-snap track, eased glide, gentle autoplay ----------
  document.querySelectorAll('[data-slider]').forEach((sl) => {
    const track = sl.querySelector('.sliderTrack');
    const slides = [...track.querySelectorAll('.slide')];
    const prev = sl.querySelector('[data-slider-prev]'), next = sl.querySelector('[data-slider-next]');
    const count = sl.querySelector('[data-slider-count]'), label = sl.querySelector('[data-slider-label]');
    const dotsWrap = sl.querySelector('[data-slider-dots]');
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const DELAY = 4500, GLIDE = 900;
    const chev = (d) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="${d}"/></svg>`;
    prev.innerHTML = chev('M15 5 8 12l7 7'); next.innerHTML = chev('m9 5 7 7-7 7');
    sl.style.setProperty('--t', `${DELAY}ms`);
    const dots = slides.map((sld, i) => {
      const b = document.createElement('button');
      b.type = 'button'; b.setAttribute('aria-label', `Show screen ${i + 1}: ${sld.dataset.label}`);
      b.addEventListener('click', () => go(i, true));
      dotsWrap.append(b); return b;
    });

    let idx = -1, raf = 0, gliding = false;
    const setIndex = (i) => {
      if (i === idx) return;
      idx = i;
      count.textContent = String(i + 1).padStart(2, '0');
      label.textContent = slides[i].dataset.label;
      dots.forEach((d, k) => d.setAttribute('aria-current', String(k === i)));
      prev.disabled = i === 0; next.disabled = i === slides.length - 1;
      const n = slides[i + 1]?.querySelector('img[loading="lazy"]');  // warm up the next screen
      if (n) n.loading = 'eager';
    };
    const sync = () => { raf = 0; if (!gliding) setIndex(Math.round(track.scrollLeft / Math.max(1, track.clientWidth))); };
    track.addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(sync); }, { passive: true });

    // Eased glide between screens (snap is paused while gliding so it can't fight the animation)
    let glideRaf = 0;
    const glideTo = (i) => {
      const to = i * track.clientWidth, from = track.scrollLeft;
      cancelAnimationFrame(glideRaf);
      if (reduce || Math.abs(to - from) < 2) { track.scrollLeft = to; setIndex(i); return; }
      gliding = true; setIndex(i);
      track.style.scrollSnapType = 'none';
      const t0 = performance.now(), dur = GLIDE * (Math.abs(to - from) > track.clientWidth * 1.5 ? 1.35 : 1);
      const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
      const step = (now) => {
        const k = Math.min(1, (now - t0) / dur);
        track.scrollLeft = from + (to - from) * ease(k);
        if (k < 1) glideRaf = requestAnimationFrame(step);
        else { track.style.scrollSnapType = ''; gliding = false; }
      };
      glideRaf = requestAnimationFrame(step);
    };
    const go = (i, byUser) => {
      const n = slides.length;
      glideTo(((i % n) + n) % n);
      if (byUser) restart();
    };

    // Autoplay: pauses on hover, focus, touch, when off-screen or the tab is hidden
    let timer = 0, startedAt = 0, remaining = DELAY;
    const flags = { hover: false, focus: false, touch: false, offscreen: true, hidden: document.hidden };
    const canPlay = () => !reduce && slides.length > 1 && !Object.values(flags).some(Boolean);
    const schedule = (ms) => { clearTimeout(timer); startedAt = performance.now(); remaining = ms; timer = setTimeout(() => { go(idx + 1); restart(); }, ms); };
    const restart = () => { remaining = DELAY; dots[idx]?.classList.remove('fill'); void dots[idx]?.offsetWidth; dots[idx]?.classList.add('fill'); update(true); };
    const update = (fresh) => {
      const play = canPlay();
      sl.classList.toggle('paused', !play);
      if (play) schedule(fresh ? DELAY : remaining);
      else if (timer) { clearTimeout(timer); timer = 0; remaining = Math.max(300, remaining - (performance.now() - startedAt)); }
    };
    const set = (k, v) => { if (flags[k] !== v) { flags[k] = v; update(false); } };
    if (!reduce && slides.length > 1) {
      sl.classList.add('autoplay');
      sl.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') set('hover', true); });
      sl.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse') set('hover', false); });
      sl.addEventListener('focusin', () => set('focus', true));
      sl.addEventListener('focusout', (e) => { if (!sl.contains(e.relatedTarget)) set('focus', false); });
      track.addEventListener('touchstart', () => set('touch', true), { passive: true });
      track.addEventListener('touchend', () => setTimeout(() => { set('touch', false); restart(); }, 2500), { passive: true });
      document.addEventListener('visibilitychange', () => set('hidden', document.hidden));
      if ('IntersectionObserver' in window) new IntersectionObserver(([e]) => set('offscreen', !e.isIntersecting), { threshold: 0.35 }).observe(sl);
      else set('offscreen', false);
    }

    prev.addEventListener('click', () => go(idx - 1, true));
    next.addEventListener('click', () => go(idx + 1, true));
    sl.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { e.preventDefault(); go(idx + 1, true); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(idx - 1, true); }
    });
    addEventListener('resize', () => { track.scrollLeft = idx * track.clientWidth; });
    setIndex(0);
    dots[0]?.classList.add('fill');
  });

  // ---------- Motion (library-free; skipped for reduced motion) ----------
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const onEnter = (els, cb, { threshold = 0.15, rootMargin = '0px 0px -8% 0px' } = {}) => {
    if (!els.length) return;
    if (!('IntersectionObserver' in window)) { els.forEach(cb); return; }
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { cb(e.target); io.unobserve(e.target); }
    }), { threshold, rootMargin });
    els.forEach((el) => io.observe(el));
  };
  // Wrap each word of an element (keeping inner markup like .outline spans) in spans
  const wrapWords = (el, make) => {
    let i = 0;
    const walk = (node) => [...node.childNodes].forEach((child) => {
      if (child.nodeType === 3) {
        const frag = document.createDocumentFragment();
        child.textContent.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          frag.append(/^\s+$/.test(part) ? ' ' : make(part, i++));
        });
        child.replaceWith(frag);
      } else if (child.nodeType === 1 && child.tagName !== 'BR') walk(child);
    });
    walk(el);
    return i;
  };

  if (!reduceMotion) {
    // Headings: masked word-by-word slide up
    const headings = [...document.querySelectorAll('.displayHeading, .servicesHeading, .aboutHeading, .techHeading, .contactHeading, .pageTitle, .detailHeading, .moreHeading, .footerBrand, .experienceRole')];
    headings.forEach((h) => {
      wrapWords(h, (word, i) => {
        const w = document.createElement('span'); w.className = 'w';
        const wi = document.createElement('span'); wi.className = 'wi'; wi.style.setProperty('--i', i); wi.textContent = word;
        w.append(wi); return w;
      });
      if (h.hasAttribute('data-reveal') && h.dataset.reveal !== 'stagger') h.removeAttribute('data-reveal');
    });
    onEnter(headings, (h) => h.classList.add('is-in'), { threshold: 0.2 });

    // Screenshots: clip wipe that settles, then the helper classes are removed
    const shots = [...document.querySelectorAll('.projectShot, .showcaseMedia:not(.hasSlider), .sliderFrame')];
    shots.forEach((el) => el.classList.add('imgReveal'));
    onEnter(shots, (el) => {
      el.classList.add('is-in');
      setTimeout(() => el.classList.remove('imgReveal', 'is-in'), 1600);
    }, { threshold: 0.2 });

    // About copy fills in as it is read
    const fills = [...document.querySelectorAll('.aboutCopy')].map((el) => {
      el.classList.add('readFill');
      const n = wrapWords(el, (word) => { const s = document.createElement('span'); s.className = 'rw'; s.textContent = word; return s; });
      return { el, words: el.querySelectorAll('.rw'), n, shown: -1 };
    });
    if (fills.length) {
      let ticking = false;
      const paint = () => {
        ticking = false;
        const vh = innerHeight;
        fills.forEach((f) => {
          const r = f.el.getBoundingClientRect();
          const p = Math.min(1, Math.max(0, (vh * 0.88 - r.top) / (r.height + vh * 0.3)));
          const count = Math.round(p * f.n);
          if (count === f.shown) return;
          f.words.forEach((w, i) => w.classList.toggle('on', i < count));
          f.shown = count;
        });
      };
      addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(paint); } }, { passive: true });
      paint();
    }

    // Stats count up once
    onEnter([...document.querySelectorAll('.aboutStatValue')], (el) => {
      const m = el.textContent.trim().match(/^(\d+)(.*)$/);
      if (!m) return;
      const end = +m[1], suffix = m[2], t0 = performance.now(), dur = 1200;
      const step = (t) => {
        const k = Math.min(1, (t - t0) / dur), eased = 1 - Math.pow(1 - k, 3);
        el.textContent = Math.round(end * eased) + suffix;
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, { threshold: 0.6 });

    // Phone preview: tall full-site screenshot that scrolls inside the phone
    const measurePhone = (ph) => {
      const img = ph._full;
      if (!img || !img.naturalWidth) return;
      const frameH = ph.clientHeight, w = ph.clientWidth;
      const travel = Math.max(0, (w * img.naturalHeight) / img.naturalWidth - frameH);
      ph.style.setProperty('--travel', travel.toFixed(1));
      ph.style.setProperty('--dur', `${Math.min(14, Math.max(4, (travel / Math.max(1, frameH)) * 1.25)).toFixed(2)}s`);
    };
    const loadPhone = (ph, done) => {
      if (ph._full) { if (ph._full.complete && ph._full.naturalWidth) done(); return; }
      const img = new Image();
      img.className = 'phoneFull'; img.alt = ''; img.decoding = 'async';
      img.addEventListener('load', () => { measurePhone(ph); requestAnimationFrame(() => { ph.classList.add('ready'); done(); }); }, { once: true });
      img.src = ph.dataset.full;
      ph.append(img); ph._full = img;
    };
    if (finePointer) {
      document.querySelectorAll('.project').forEach((card) => {
        const ph = card.querySelector('.projectPhone[data-full]');
        if (!ph) return;
        const start = () => loadPhone(ph, () => measurePhone(ph));
        card.addEventListener('pointerenter', start);
        card.addEventListener('focusin', start);
      });
    }
    onEnter([...document.querySelectorAll('.showcasePhone[data-full]')], (ph) => loadPhone(ph, () => { measurePhone(ph); ph.classList.add('loop'); }), { threshold: 0.3 });
    addEventListener('resize', () => document.querySelectorAll('.ready[data-full]').forEach(measurePhone));

    if (finePointer) {
      // Magnetic buttons
      document.querySelectorAll('.hero-actions .button, .header-cta, .formSubmit, .aboutCta, .contactLink').forEach((el) => {
        el.classList.add('magnetic');
        el.addEventListener('pointermove', (e) => {
          const r = el.getBoundingClientRect();
          el.style.setProperty('--mx', `${(e.clientX - r.left - r.width / 2) * 0.22}px`);
          el.style.setProperty('--my', `${(e.clientY - r.top - r.height / 2) * 0.3}px`);
        });
        el.addEventListener('pointerleave', () => { el.style.setProperty('--mx', '0px'); el.style.setProperty('--my', '0px'); });
      });

      // "View" bubble over project images
      const targets = document.querySelectorAll('.projectCover, .marqueeCard');
      if (targets.length) {
        const bubble = document.createElement('div');
        bubble.className = 'viewCursor'; bubble.setAttribute('aria-hidden', 'true'); bubble.textContent = 'View';
        document.body.append(bubble);
        let x = 0, y = 0, raf = 0;
        const move = (e) => {
          x = e.clientX; y = e.clientY;
          if (!raf) raf = requestAnimationFrame(() => { raf = 0; bubble.style.setProperty('--cx', `${x}px`); bubble.style.setProperty('--cy', `${y}px`); });
        };
        targets.forEach((t) => {
          t.addEventListener('pointerenter', (e) => { move(e); bubble.classList.add('on'); t.addEventListener('pointermove', move); });
          t.addEventListener('pointerleave', () => { bubble.classList.remove('on'); t.removeEventListener('pointermove', move); });
        });
      }
    }
  }

  // Pause scrolling strips while they are off-screen (saves CPU/battery)
  if ('IntersectionObserver' in window) {
    const mio = new IntersectionObserver((entries) => entries.forEach((e) => e.target.classList.toggle('offscreen', !e.isIntersecting)));
    document.querySelectorAll('.marquee, .feedbackMarquee').forEach((m) => mio.observe(m));
  }

  // Scroll reveal
  const revealables = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute('data-revealed', '');
          io.unobserve(entry.target);
        }
      });
    // threshold 0 (+ bottom margin): reveal once the top edge is well into view. A ratio
    // threshold could never be reached by blocks taller than ~8 screens (e.g. the projects grid on phones).
    }, { threshold: 0, rootMargin: '0px 0px -10% 0px' });
    revealables.forEach((el) => io.observe(el));
    // Safety net: at the very bottom of the page, show anything the bottom margin kept hidden
    const atBottom = () => {
      if (innerHeight + scrollY < document.documentElement.scrollHeight - 4) return;
      document.querySelectorAll('[data-reveal]:not([data-revealed])').forEach((el) => { el.setAttribute('data-revealed', ''); io.unobserve(el); });
      removeEventListener('scroll', atBottom);
    };
    addEventListener('scroll', atBottom, { passive: true });
  } else {
    revealables.forEach((el) => el.setAttribute('data-revealed', ''));
  }

  // Invert header colours while it sits over a dark section
  const darkSections = document.querySelectorAll('[data-header-dark]');
  const updateHeaderTheme = () => {
    const y = header.getBoundingClientRect().top + header.offsetHeight / 2;
    const overDark = [...darkSections].some((s) => {
      const r = s.getBoundingClientRect();
      return r.top <= y && r.bottom >= y;
    });
    header.classList.toggle('is-scrolled', window.scrollY > 40);
    if (overDark) header.dataset.theme = 'dark';
    else delete header.dataset.theme;
  };
  window.addEventListener('scroll', updateHeaderTheme, { passive: true });
  window.addEventListener('resize', updateHeaderTheme);
  updateHeaderTheme();
})();
