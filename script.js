let temperatureElement = document.querySelector("#current-temperature");
let cityElement = document.querySelector("#current-city");
let weatherDescriptionElement = document.querySelector("#weather-description");
let windSpeed = document.querySelector("#windSpeed");
let humidity = document.querySelector("#Humidity");
let icon = document.querySelector("#weatherIcon");
let iconImage = document.querySelector("#iconImage");
function displayTemperature(response) {
    let temperature = Math.round(response.data.temperature.current);
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = temperature;
  }
  function displayWeatherDescription(response){
    let description = response.data.condition.description;
    weatherDescriptionElement.innerHTML = description;
    
}
function displayWindSpeed(response){
    let speed = response.data.wind.speed;
    windSpeed.innerHTML = speed;
    
}

function displayHumidity(response){
    let Humidity = response.data.temperature.humidity;
    humidity.innerHTML = Humidity;
    
}
function displayIcon(response){

    iconImage.src = response.data.condition.icon_url; 
    iconImage.style.width = '100px';
    iconImage.style.height = '100px';
    iconImage.style.display = 'inline';

    
}
  
  function search(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-input");
    let city = searchInputElement.value;
  
    let apiKey = "b2a5adcct04b33178913oc335f405433";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(displayTemperature);
    axios.get(apiUrl).then(displayWeatherDescription);
    axios.get(apiUrl).then(displayWindSpeed);
    axios.get(apiUrl).then(displayHumidity);
    axios.get(apiUrl).then(displayIcon);

  }
  
  function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let day = date.getDay();
  
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    if (hours < 10) {
      hours = `0${hours}`;
    }
  
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
  
    let formattedDay = days[day];
    return `${formattedDay} ${hours}:${minutes}`;
  }
  
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", search);
  
  let currentDateELement = document.querySelector("#current-date");
  let currentDate = new Date();
  
  currentDateELement.innerHTML = formatDate(currentDate);
  