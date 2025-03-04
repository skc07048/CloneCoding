"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const introTitle = document.querySelectorAll(".intro_title > span");
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".theme_wrap",
        start: "top top",
        end: "bottom 100%",
        scrub: 1.5,
      },
    })
    .to(introTitle, {
      opacity: 1,
      stagger: 0.5,
      duration: 2,
    });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".hero_text1",
        start: "top 60%",
        end: "bottom top",
        scrub: 2,
      },
    })
    .fromTo(
      ".hero_text1",
      {
        xPercent: 0,
      },
      {
        xPercent: -50,
        ease: "power1,out",
      }
    );
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".hero_text2",
        start: "top 59%",
        end: "bottom top",
        scrub: 2,
      },
    })
    .fromTo(
      ".hero_text2",
      {
        xPercent: 0,
      },
      {
        xPercent: 50,
        ease: "power1,out",
      }
    );
});
