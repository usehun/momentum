const portfolio = document.querySelector(".portfolio-form");
const loginForm = document.querySelector(".login-form");
const mainForm = document.querySelector(".main-form");
const user = document.querySelector("#user");
const greet = document.querySelector(".greet");
const logout = document.querySelector(".logout");

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

function handlelogout() {
  mainForm.classList.add(HIDDEN);
  mainForm.classList.add("disapper");
  portfolio.classList.remove(HIDDEN);
  portfolio.classList.add("appear");
  user.value = "";
  localStorage.removeItem("username");
}

logout.addEventListener("click", handlelogout);
