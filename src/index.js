import fetchWeather from './datafetch/fetch-weather';
import getUserLocation from './datafetch/get-geolocation';
import mainWeatherComponent from './components/main-weather-component';
import locationComponent from './components/location-component';
import './styles.css';

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
    document.body.insertAdjacentHTML('beforeend', locationComponent(resp));
    document.body.insertAdjacentHTML('beforeend', mainWeatherComponent(resp));

    // document.body.insertAdjacentHTML('beforeend');
  });
}

drawUI();
