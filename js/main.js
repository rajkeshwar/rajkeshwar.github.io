// ── Experience Tab Switching ──────────────────────────────────
const tabBtns = document.querySelectorAll('.exp-tab-btn');
const panels  = document.querySelectorAll('.exp-panel');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    panels.forEach(p => p.classList.remove('active'));

    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    const target = document.getElementById(btn.getAttribute('aria-controls'));
    if (target) target.classList.add('active');
  });
});

// ── Scroll-triggered fade-in ─────────────────────────────────
const fadeEls = document.querySelectorAll('.fade-in');
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => io.observe(el));

// ── Active nav link on scroll ────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const onScroll = () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 140) {
      current = section.id;
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
};

window.addEventListener('scroll', onScroll, { passive: true });
onScroll(); // run on load
