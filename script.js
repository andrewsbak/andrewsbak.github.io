window.addEventListener("DOMContentLoaded", () => {
  const heroText = document.getElementById('hero-title');
  const floatEls = document.querySelectorAll('.scroll-float');

  document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const offsetX = (clientX - centerX) / centerX;
    const offsetY = (clientY - centerY) / centerY;

    const moveX = offsetX * 10;
    const moveY = offsetY * 10;

    heroText.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
  });

  document.addEventListener('mouseleave', () => {
    heroText.style.transform = 'translate(0, 0) scale(1)';
  });

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    floatEls.forEach(el => {
      const speed = el.dataset.speed || 0.3;
      el.style.transform = `translateY(${scrollY * speed}px)`;
    });
  });
});
