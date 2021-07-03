let weather = {
  apiKey: "6cc9a468034a6c8817b0ed8d38e5bad3",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&APPID=" +
        this.apiKey
    )
      .then((res) => res.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    document.querySelector(".city").innerText = `Weather in ${name}`;
    document.querySelector(".temperature").innerText = temp + "°C";
    document.querySelector(
      ".weather-icon"
    ).src = `http://openweathermap.org/img/wn/${icon}.png`;
    document.querySelector(".description").innerText = `${description}`;
    document.querySelector(".wind").innerText = `Wind-speed : ${speed}km/h`;
    document.querySelector(".humidity").innerText = `humidity : ${humidity}%`;
  },
  search: function () {
    this.fetchWeather(document.querySelector("input").value);
  },
};

// openweathermap.org/img/wn/01n@2x.png `${temp}°C`
document
  .querySelector("button")
  .addEventListener("click", () => weather.search());

document.querySelector("input").addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    weather.search();
  }
});

weather.fetchWeather("Khunti");
