const base_url = "https://api.openweathermap.org/data/2.5/weather";

let result = document.querySelector("#result");
let btn = document.querySelector("#btn");
let citySelect = document.querySelector("#city");
let weatherForm = document.querySelector("#weatherForm");

document.addEventListener("DOMContentLoaded", loadCities);

async function loadCities() {
  try {
    citySelect.innerHTML = "<option value=''>Loading cities...</option>";
    citySelect.disabled = true;
    const response = await fetch("city-list.json");
    if (!response.ok) {
      throw new Error("Failed to load city list");
    }

    const cities = await response.json();
    citySelect.innerHTML = "<option value=''>Select a city</option>";

    cities.forEach((item) => {
      let option = document.createElement("option");
      option.value = item.city;
      option.textContent = `${item.city}, ${item.country}`;
      citySelect.appendChild(option);
    });

    citySelect.disabled = false;
  } catch (error) {
    citySelect.innerHTML = "<option value=''>Could not load cities</option>";
    citySelect.disabled = true;
    result.innerHTML = "Error loading city list.";
    console.error(error);
  }
}

weatherForm.addEventListener("submit", function (event) {
    event.preventDefault();
  getWeather();
});

async function getWeather() {
  let selectedCity = citySelect.value;
  if (selectedCity === "") {
    result.innerHTML = "Please select a city.";
    return;
  }

  result.innerHTML = "Loading weather...";
  try {
    const url = `${base_url}?q=${selectedCity}&appid=${API_Key}&units=metric`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City weather data not found");
    }
    const data = await response.json();

    result.innerHTML = `
      City : ${data.name}<br>
      Country : ${data.sys.country}<br>
      Temp : ${Math.round(data.main.temp)}°C<br>
      Feels Like : ${Math.round(data.main.feels_like)}°C<br>
      Min Temp : ${Math.round(data.main.temp_min)}°C<br>
      Max Temp : ${Math.round(data.main.temp_max)}°C<br>
      Visibility : ${data.visibility / 1000} km<br>
      Weather : ${data.weather[0].main}
    `;
  } catch (error) {
    result.innerHTML = "Error fetching weather data. Please try again.";
    console.error(error);
  }
}