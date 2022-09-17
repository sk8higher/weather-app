import fetchWeather from './datafetch/fetch-weather';
import getUserLocation from './datafetch/get-geolocation';
import mainWeatherComponent from './components/main-weather-component';
import locationComponent from './components/location-component';
import extraInfoComponent from './components/extra-info-component';
import searchBarComponent from './components/searchbar-component';

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
    wrapper.insertAdjacentHTML('beforeend', searchBarComponent());

    const form = document.querySelector('.search-form');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const formInput = document.querySelector('#searchbar');

      const cityname = formInput.value;
      const linkapi = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=66a86bcca603db7ee72a9999499bb3fa&units=metric`;

      fetchWeather(linkapi).then((resp) => {
        wrapper.innerHTML = '';
        wrapper.insertAdjacentHTML('beforeend', searchBarComponent());
        console.log(resp);
        wrapper.insertAdjacentHTML('beforeend', locationComponent(resp));
        wrapper.insertAdjacentHTML('beforeend', mainWeatherComponent(resp));

        const mainWeatherEl = document.querySelector('.main-weather-container');
        mainWeatherEl.insertAdjacentHTML('beforeend', extraInfoComponent(resp));
      });
    });

    wrapper.insertAdjacentHTML('beforeend', locationComponent(resp));
    wrapper.insertAdjacentHTML('beforeend', mainWeatherComponent(resp));

    const mainWeatherEl = document.querySelector('.main-weather-container');
    mainWeatherEl.insertAdjacentHTML('beforeend', extraInfoComponent(resp));
  });
}

drawUI();
