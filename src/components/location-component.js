function locationComponent(weatherInfo) {
  try {
    const city = weatherInfo.name;
    const countryCode = weatherInfo.sys.country;

    return `
  <div class="location-container">
    <p class="location-city">${city}</p>
    <p class="location-country-code">${countryCode}</p>
  </div>
  `;
  } catch (error) {
    return '<p class="error">Failed to get city location. Check spelling and try again</p>';
  }
}

export default locationComponent;
