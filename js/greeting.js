const portfolio = document.querySelector(".portfolio-form");
const loginForm = document.querySelector(".login-form");
const mainForm = document.querySelector(".main-form");
const user = document.querySelector("#user");
const greet = document.querySelector(".greet");

const HIDDEN = "hidden";
const USERNAME = "username";

function handleLogin(event) {
  event.preventDefault();

  greet.innerText = `${user.value}`;

  portfolio.classList.add(HIDDEN);
  portfolio.classList.add("disapper");

  mainForm.classList.remove(HIDDEN);
  mainForm.classList.add("appear");

  localStorage.setItem(USERNAME, user.value);
}
const savedUser = localStorage.getItem(USERNAME);

if (savedUser === null) {
  portfolio.classList.remove(HIDDEN);
  loginForm.addEventListener("submit", handleLogin);
} else {
  portfolio.classList.add(HIDDEN);
  mainForm.classList.remove(HIDDEN);

  greet.innerText = `${localStorage.getItem(USERNAME)}`;
}
