import searchBarComponent from './searchbar-component';
import locationComponent from './location-component';
import mainWeatherComponent from './main-weather-component';
import extraInfoComponent from './extra-info-component';
import fetchWeather from '../datafetch/fetch-weather';

import '../styles.css';

/**
 * Renders all app components. Uses an element, where it will be inserting HTML and link to fetch weather
 * @param {HTMLElement} element
 * @param {string} link
 */
function renderUI(element, link) {
  fetchWeather(link).then((resp) => {
    element.innerHTML = '';
    element.insertAdjacentHTML('beforeend', searchBarComponent());
    element.insertAdjacentHTML('beforeend', locationComponent(resp));
    element.insertAdjacentHTML('beforeend', mainWeatherComponent(resp));

    const mainWeatherEl = document.querySelector('.main-weather-container');
    mainWeatherEl.insertAdjacentHTML('beforeend', extraInfoComponent(resp));
  });
}

export default renderUI;
