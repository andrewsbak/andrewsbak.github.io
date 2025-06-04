window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const chars = document.querySelectorAll("#hero-title .char");

  gsap.fromTo(
    chars,
    {
      willChange: "opacity, transform",
      opacity: 0,
      yPercent: 120,
      scaleY: 2.3,
      scaleX: 0.7,
      transformOrigin: "50% 0%",
    },
    {
      opacity: 1,
      yPercent: 0,
      scaleY: 1,
      scaleX: 1,
      duration: 1,
      ease: "back.inOut(2)",
      stagger: 0.03,
      scrollTrigger: {
        trigger: "#hero-title",
        start: "center bottom+=50%",
        end: "bottom bottom-=40%",
        scrub: true
      }
    }
  );
});
