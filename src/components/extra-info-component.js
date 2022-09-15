function extraInfoComponent(weatherInfo) {
  const speed = weatherInfo.wind.speed;
  const pressure = weatherInfo.main.pressure;

  return `
  <div class="extra-info-container">
    <div class="extra-info__wrapper">
      <p class="extra-info__text">Speed</p>
      <p class="extra-info__content">${speed} m/s</p>
    </div>
    <div class="extra-info__wrapper">
      <p class="extra-info__text">Pressure</p>
      <p class="extra-info__content">${pressure} hPa</p>
    </div>
  </div> `;
}

export default extraInfoComponent;
