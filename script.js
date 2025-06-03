const heroText = document.querySelector('.hero h1');

document.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const offsetX = (clientX - centerX) / centerX;
  const offsetY = (clientY - centerY) / centerY;

  const moveX = offsetX * 10; // control intensity
  const moveY = offsetY * 10;

  heroText.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
});

document.addEventListener('mouseleave', () => {
  heroText.style.transform = 'translate(0, 0) scale(1)';
});
