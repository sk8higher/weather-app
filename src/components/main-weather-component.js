function mainWeatherComponent(weatherInfo) {
  return `<p>${Number(weatherInfo.main.temp).toFixed(0)} C in ${
    weatherInfo.name
  }</p>`;
}

export default mainWeatherComponent;
