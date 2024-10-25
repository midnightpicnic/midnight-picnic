document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const isVisible = entry.isIntersecting;
      entry.target.style.opacity = isVisible ? 1 : 0;
      entry.target.style.transform = isVisible ? 'translateY(0)' : 'translateY(20px)';
      entry.target.style.transition = 'opacity .5s, transform .5s';
    });
  });

  const scrollReveals = document.querySelectorAll('.scroll-reveal');
  scrollReveals.forEach((element) => observer.observe(element));

  const images = document.querySelectorAll('.col picture img');
  images.forEach((img) => {
    img.addEventListener('load', () => {
      const aspectRatio = img.naturalWidth / img.naturalHeight;
      img.classList.toggle('img-vert', aspectRatio < 1);
    });
  });

  const currentYearElement = document.getElementById('current-year');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }
});