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
const listWrap = document.querySelectorAll(".slide_list_wrap");

listBtn.addEventListener("click", () => {
  list.forEach((item) => {
    item.style.display = "block";
    item.style.transform = "translateY(0%)";
    item.style.width = "15vw";
  });
  listWrap.forEach((item) => {
    item.style.setProperty("grid-column-gap", "0rem");
  });
});

gridBtn.addEventListener("click", () => {
  list.forEach((item) => {
    item.style.display = "flex";
    item.style.transform = "";
    item.style.width = "";
  });
  listWrap.forEach((item) => {
    item.style.setProperty("grid-column-gap", "6rem");
  });
});

const lgListMediaQuery = window.matchMedia(
  "(min-width: 1025px) and (max-width: 1440px)"
);
const mdListMediaQuery = window.matchMedia(
  "(min-width: 769px) and (max-width: 1024px)"
);
const smListMediaQuery = window.matchMedia(
  "(min-width: 481px) and (max-width: 768px)"
);
const xsListMediaQuery = window.matchMedia("(max-width: 480px)");

function screenSizeLg(e) {
  if (e.matches) {
    listBtn.addEventListener("click", () => {
      list.forEach((item) => {
        item.style.display = "block";
        item.style.transform = "translateY(0%)";
        item.style.width = "24vw";
      });
      listWrap.forEach((item) => {
        item.style.setProperty("grid-column-gap", "0rem");
      });
    });

    gridBtn.addEventListener("click", () => {
      list.forEach((item) => {
        item.style.display = "flex";
        item.style.transform = "";
        item.style.width = "";
      });
      listWrap.forEach((item) => {
        item.style.setProperty("grid-column-gap", "6rem");
      });
    });
  }
}

function screenSizeMd(e) {
  if (e.matches) {
    listBtn.addEventListener("click", () => {
      list.forEach((item) => {
        item.style.display = "block";
        item.style.transform = "translateY(0%)";
        item.style.width = "30vw";
      });
      listWrap.forEach((item) => {
        item.style.setProperty("grid-column-gap", "0rem");
      });
    });

    gridBtn.addEventListener("click", () => {
      list.forEach((item) => {
        item.style.display = "flex";
        item.style.transform = "";
        item.style.width = "";
      });
      listWrap.forEach((item) => {
        item.style.setProperty("grid-column-gap", "3rem");
      });
    });
  }
}

function screenSizeSm(e) {
  if (e.matches) {
    listBtn.addEventListener("click", () => {
      list.forEach((item) => {
        item.style.display = "block";
        item.style.transform = "translateY(0%)";
        item.style.width = "40vw";
      });
      listWrap.forEach((item) => {
        item.style.setProperty("grid-column-gap", "0rem");
      });
    });

    gridBtn.addEventListener("click", () => {
      list.forEach((item) => {
        item.style.display = "flex";
        item.style.transform = "";
        item.style.width = "";
      });
      listWrap.forEach((item) => {
        item.style.setProperty("grid-column-gap", "1rem");
      });
    });
  }
}

function screenSizeXs(e) {
  if (e.matches) {
    listBtn.addEventListener("click", () => {
      list.forEach((item) => {
        item.style.display = "block";
        item.style.transform = "translateY(0%)";
        item.style.width = "45vw";
      });
      listWrap.forEach((item) => {
        item.style.setProperty("grid-column-gap", "0rem");
      });
    });

    gridBtn.addEventListener("click", () => {
      list.forEach((item) => {
        item.style.display = "flex";
        item.style.transform = "";
        item.style.width = "";
      });
      listWrap.forEach((item) => {
        item.style.setProperty("grid-column-gap", "1rem");
      });
    });
  }
}

screenSizeLg(lgListMediaQuery);
screenSizeMd(mdListMediaQuery);
screenSizeSm(smListMediaQuery);
screenSizeSm(xsListMediaQuery);

lgListMediaQuery.addEventListener("change", screenSizeLg);
mdListMediaQuery.addEventListener("change", screenSizeMd);
smListMediaQuery.addEventListener("change", screenSizeSm);
smListMediaQuery.addEventListener("change", screenSizeXs);
