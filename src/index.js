function dateTime(now) {
  let minutes = now.getMinutes();
  let hours = now.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = now.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (day >= 0 && day < days.length) {
    return `${days[day]} ${hours}:${minutes}`;
  }
}
let currentDetails = document.querySelector(".current-time");
let currentDate = new Date();
currentDetails.innerHTML = dateTime(currentDate);

//WEEK 5 HOMEWORK

function displayTemp(response) {
  let temperatureElement = document.querySelector(".current-temperature-value");
  let temperature = Math.round(response.data.temperature.current);
  temperatureElement.innerHTML = `${temperature}`;
}

function searchBar(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector(".search-input");
  let cityElement = document.querySelector(".current-city");
  cityElement.innerHTML = searchInputElement.value;
  let apiKey = "7odb1604cd5806418921397fa0t4e3ac";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInputElement.value}}&key=${apiKey}`;
  axios.get(apiUrl).then(displayTemp);
}
let searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", searchBar);
