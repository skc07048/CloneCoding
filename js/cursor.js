"use strict";
const custom = document.querySelector(".cursor_move");

const cursor = (e) => {
  const mouseX = e.screenX;
  const mouseY = e.screenY;

  custom.style.willChange = "transform";
  custom.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
};

window.addEventListener("mousemove", cursor);
