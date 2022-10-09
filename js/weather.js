function GeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const apiKey = "e7e78379c8d4763208f3e28de7d32e2f";

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector(".weather span:nth-child(1)");
      const weather = document.querySelector(".weather span:nth-child(2)");
      const temp = document.querySelector(".weather span:nth-child(3)");

      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
      temp.innerText = data.main.temp;
    });
}

function GeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(GeoOk, GeoError);
