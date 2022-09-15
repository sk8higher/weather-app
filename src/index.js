import fetchWeather from './datafetch/fetch-weather';
import getUserLocation from './datafetch/get-geolocation';
import mainWeatherComponent from './components/main-weather-component';
import locationComponent from './components/location-component';
import extraInfoComponent from './components/extra-info-component';

import './styles.css';

const wrapper = document.querySelector('.wrapper');

async function drawUI() {
  // Fetching user location from browser ang getting coords
  const { latitude: lat, longitude: lng } = await getUserLocation().then(
    (coords) => coords.coords
  );

  // Building a link for api request
  const link = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=66a86bcca603db7ee72a9999499bb3fa&units=metric`;

  // Fetching the weather and appending info to the page
  fetchWeather(link).then((resp) => {
    console.log(resp);
    wrapper.insertAdjacentHTML('beforeend', locationComponent(resp));
    wrapper.insertAdjacentHTML('beforeend', mainWeatherComponent(resp));

    const mainWeatherEl = document.querySelector('.main-weather-container');
    mainWeatherEl.insertAdjacentHTML('beforeend', extraInfoComponent(resp));

    // document.body.insertAdjacentHTML('beforeend');
  });
}

drawUI();
