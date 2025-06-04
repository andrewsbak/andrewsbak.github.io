window.addEventListener("DOMContentLoaded", () => {
  const floatEls = document.querySelectorAll('.scroll-float');

  const updateScrollFloat = () => {
    const scrollY = window.scrollY;

    floatEls.forEach(el => {
      const speed = parseFloat(el.dataset.speed || 0.3);
      const offset = scrollY * speed;

      const limitedOffset = Math.min(Math.max(offset, -100), 100);
      el.style.transform = `translateY(${limitedOffset}px)`;
    });

    requestAnimationFrame(updateScrollFloat);
  };

  requestAnimationFrame(updateScrollFloat);
});
