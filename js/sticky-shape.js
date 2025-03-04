"use strict";

document.addEventListener("mousemove", (event) => {
  const shapeWrap = document.querySelector(".sticky_shape");
  const shape = document.querySelector(".shape");

  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const moveX = (event.clientX - centerX) * 0.1;
  const moveY = (event.clientX - centerY) * 0.1;

  shape.style.transform = `translate(${moveX}px, ${moveY}px)`;
});
