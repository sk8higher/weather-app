function locationComponent(weatherInfo) {
  const city = weatherInfo.name;
  const countryCode = weatherInfo.sys.country;

  return `
  <div class="location-container">
    <p class="location-city">${city}</p>
    <p class="location-country-code">${countryCode}</p>
  </div>
  `;
}

export default locationComponent;
