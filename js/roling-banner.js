"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const slideList = document.querySelectorAll(".slide_list_wrap");

  gsap.to(slideList, {
    xPercent: -100 * slideList.length,
    duration: 100,
    ease: "none",
    repeat: -1,
  });
});

const gridBtn = document.getElementById("gridBtn");
const listBtn = document.getElementById("listBtn");
const list = document.querySelectorAll(".list");

listBtn.addEventListener("click", () => {
  list.style.diplay = "block";
});

gridBtn.addEventListener("click", () => {});
