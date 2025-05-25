// Wait for DOM
document.addEventListener('DOMContentLoaded', () => {
  // Section reveal on scroll
  const sections = document.querySelectorAll('.section');

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
        section.classList.add('visible');
      }
    });
  };

  // Initial check + scroll event
  revealOnScroll();
  window.addEventListener('scroll', revealOnScroll);

  // Smooth scrolling for nav links (optional fallback)
  document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetID = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetID);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
