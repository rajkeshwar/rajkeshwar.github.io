// ── Theme Toggle ──────────────────────────────────────────────
const toggleBtn = document.getElementById('theme-toggle');
const html = document.documentElement;

// Apply saved theme immediately (before paint to avoid flash)
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
html.setAttribute('data-theme', initialTheme);
updateToggleLabel(initialTheme);

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateToggleLabel(next);
  });
}

function updateToggleLabel(theme) {
  if (!toggleBtn) return;
  if (theme === 'dark') {
    toggleBtn.setAttribute('aria-label', 'Switch to light mode');
    toggleBtn.setAttribute('title', 'Switch to light mode');
  } else {
    toggleBtn.setAttribute('aria-label', 'Switch to dark mode');
    toggleBtn.setAttribute('title', 'Switch to dark mode');
  }
}

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
onScroll();