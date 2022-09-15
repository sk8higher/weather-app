function mainWeatherComponent(weatherInfo) {
  const deg = Number(weatherInfo.main.temp).toFixed(0);
  const icon = weatherInfo.weather[0].icon;
  const description = weatherInfo.weather[0].main;

  return `
  <div class="main-weather-container">
  <div class="main-weather__info-container">
    <p class="weather-info">${description}</p>
  </div>
    <div class="main-weather__temp-container">
      <img class="weather-icon" src="http://openweathermap.org/img/wn/${icon}.png"/>
      <p class="main-weather-degrees">${deg}°C</p>
    </div>
  </div>`;
}

export default mainWeatherComponent;
