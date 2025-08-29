// Navigation scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 100);
});
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({behavior: 'smooth', block: 'start'});
  });
});
// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {if (entry.isIntersecting) entry.target.classList.add('visible');});
}, {threshold: 0.1, rootMargin: '0px 0px -100px 0px'});
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
// ...
