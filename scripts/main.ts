// scripts/main.ts

// --- Mobile Navigation Logic ---
const mobileNavToggle = document.querySelector('.mobile-nav-toggle') as HTMLButtonElement | null;
const primaryNav = document.querySelector('#primary-navigation') as HTMLElement | null;

if (mobileNavToggle && primaryNav) {
  mobileNavToggle.addEventListener('click', () => {
    const isVisible = primaryNav.getAttribute('data-visible') === 'true';
    
    primaryNav.setAttribute('data-visible', String(!isVisible));
    mobileNavToggle.setAttribute('aria-expanded', String(!isVisible));
  });
}

// --- Back to Top Button Logic ---
const backToTopButton = document.querySelector('.back-to-top') as HTMLElement | null;

if (backToTopButton) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  });
}