const clock = document.querySelector(".clock");
const miniClock = document.querySelector(".mini-clock");

function handleDate() {
  const date = new Date();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}시 ${minutes}분 ${seconds}초`;
  miniClock.innerText = `${hours}시 ${minutes}분 ${seconds}초`;
}

handleDate();
setInterval(handleDate, 1000);
