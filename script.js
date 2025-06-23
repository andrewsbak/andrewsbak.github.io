window.addEventListener("DOMContentLoaded", () => {

  const progressBar = document.getElementById("scroll-progress");

  window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = `${scrollPercent}%`;


    document.querySelectorAll(".insight-row").forEach((row) => {
      const rect = row.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        row.classList.add("visible");
      }
    });
  });
});
