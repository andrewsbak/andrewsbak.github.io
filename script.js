window.addEventListener("DOMContentLoaded", () => {
  // ... (your other animations, if any)

  const progressBar = document.getElementById("scroll-progress");

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    progressBar.style.width = `${scrollPercent}%`;
  });
});
