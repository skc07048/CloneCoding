"use strict";
function paragraph(element, reset = false) {
  const array = element.innerText.split("");
  const special = ["!", "#", "$", "%", "&"];
  const exception = [" ", "\n", ".", ","];
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  if (reset) {
    element.innerText = element.dataset.originalText;
    return;
  }

  const numArray = [];
  array.forEach(() => {
    const num = random(1, 5);
    numArray.push(num);
  });

  let completeCount;
  let newText;
  const timer = setInterval(() => {
    completeCount = 0;
    newText = "";
    numArray.forEach((num, i) => {
      if (exception.includes(array[i]) || numArray[i] === 0) {
        newText += array[i];
        completeCount += 1;
      } else {
        newText += special[numArray[i] % special.length];
        numArray[i] = --num;
      }
    });

    element.innerText = newText;
    if (completeCount === numArray.length) clearInterval(timer);
  }, 100);
}

const textElement = {
  caption: {
    cap1: document.querySelector(".c1"),
    cap2: document.querySelector(".c2"),
  },
  themeText: {
    theme1: document.querySelector(".themeText1"),
    theme2: document.querySelector(".themeText2"),
    theme3: document.querySelector(".themeText3"),
    theme4: document.querySelector(".themeText4"),
    theme5: document.querySelector(".themeText5"),
  },
};

const changeText = [
  ...Object.values(textElement.caption),
  ...Object.values(textElement.themeText),
];

changeText.forEach((element) => {
  element.dataset.originalText = element.innerText;
  element.dataset.originalColor = element.style.color || "#c5b6af";

  element.addEventListener("mouseover", () => {
    paragraph(element);
    element.style.color = "#ebfb1d";
  });
  element.addEventListener("mouseout", () => {
    paragraph(element, true);
    element.style.color = element.dataset.originalColor;
  });
});
