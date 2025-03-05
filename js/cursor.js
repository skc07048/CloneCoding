"use strict";
const custom = document.querySelector(".cursor_move");

const cursor = (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  custom.style.willChange = "transform";
  custom.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) scale3d(1,1,1)`;
  custom.style.transformStyle = "preserve-3d";
};

window.addEventListener("mousemove", cursor);

//hover
document.addEventListener("DOMContentLoaded", () => {
  const elements = {
    buttons: {
      right: document.querySelector(".right_btn"),
      left: document.querySelector(".left_btn"),
      footer: document.querySelector(".footer_btn"),
      audio: document.querySelector(".audio_btn"),
    },
    cursors: {
      main: document.querySelector(".cursor"),
      top: document.querySelector(".cursor_top"),
      bottom: document.querySelector(".cursor_bottom"),
      left: document.querySelector(".cursor_left"),
      right: document.querySelector(".cursor_right"),
      dot: document.querySelector(".cursor_dot"),
    },
    themes: {
      theme1: document.querySelector(".theme_1"),
      theme2: document.querySelector(".theme_2"),
      theme3: document.querySelector(".theme_3"),
      theme4: document.querySelector(".theme_4"),
      theme5: document.querySelector(".theme_5"),
    },
  };

  const cursorElements = Object.values(elements.cursors);

  function addHoverClass() {
    cursorElements.forEach((el) => {
      el.classList.add("hover");
    });
  }
  function removeHoverClass() {
    cursorElements.forEach((el) => {
      el.classList.remove("hover");
    });
  }

  const hoverTarget = [
    ...Object.values(elements.buttons),
    ...Object.values(elements.themes),
  ];

  hoverTarget.forEach((element) => {
    element.addEventListener("mouseover", addHoverClass);
  });
  hoverTarget.forEach((element) => {
    element.addEventListener("mouseleave", removeHoverClass);
  });
});
