import getUserLocation from './datafetch/get-geolocation';

import renderUI from './components/renderUI';
import './styles.css';

const wrapper = document.querySelector('.wrapper');

async function init() {
  // Fetching user location from browser ang getting coords
  const { latitude: lat, longitude: lng } = await getUserLocation().then(
    (coords) => coords.coords
  );

  // Building a link for api request
  const link = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=66a86bcca603db7ee72a9999499bb3fa&units=metric`;

  await renderUI(wrapper, link);
}

init();
