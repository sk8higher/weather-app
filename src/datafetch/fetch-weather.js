async function fetchWeather(link) {
  const res = await fetch(link);
  const resJson = await res.json();

  return resJson;
}

export default fetchWeather;
