const images = [
  "header01.jpg",
  "header02.jpg",
  "header03.jpg",
  "header04.jpg",
  "header05.jpg",
  "header06.jpg",
];

const randomImage = images[Math.floor(Math.random() * images.length)];

const headerImg = document.createElement("img");

headerImg.src = `img/main/${randomImage}`;
headerImg.classList.add("img");

const randomImg = document.querySelector(".randomImg");

randomImg.prepend(headerImg);
