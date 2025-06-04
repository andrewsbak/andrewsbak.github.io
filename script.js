window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    "#hero-title",
    {
      yPercent: 30,
      opacity: 0.6,
    },
    {
      yPercent: 0,
      opacity: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#hero-title",
        start: "top center+=100",
        end: "bottom top-=100",
        scrub: true,
      }
    }
  );
});
