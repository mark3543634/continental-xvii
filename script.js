const header = document.querySelector('.topbar');
const revealItems = document.querySelectorAll('.reveal');

function updateHeader() {
  header.classList.toggle('scrolled', window.scrollY > 36);
}

const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  }
}, { threshold: 0.12 });

revealItems.forEach((item) => observer.observe(item));
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();
