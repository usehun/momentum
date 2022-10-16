const firstDisplay = document.querySelector(".bg1");

const DISPLAY = "display";

function slide() {
  const carousel = document.querySelector(".display");
  if (carousel) {
    carousel.classList.remove(DISPLAY);
    const nextDisplay = carousel.nextElementSibling;

    if (nextDisplay) {
      nextDisplay.classList.add(DISPLAY);
    } else {
      firstDisplay.classList.add(DISPLAY);
    }
  } else {
    firstDisplay.classList.add(DISPLAY);
  }
}

slide();
setInterval(slide, 2000);
