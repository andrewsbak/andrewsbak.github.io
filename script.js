window.addEventListener("DOMContentLoaded", () => {
  // Scroll Progress Bar
  const progressBar = document.getElementById("scroll-progress");

  window.addEventListener("scroll", () => {
    // Progress bar logic
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = `${scrollPercent}%`;

    // Insight fade-in animation
    document.querySelectorAll(".insight-row").forEach((row) => {
      const rect = row.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        row.classList.add("visible");
      }
    });
  });
});
