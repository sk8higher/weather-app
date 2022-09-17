async function fetchWeather(link) {
  try {
    const res = await fetch(link);
    const resJson = await res.json();

    return resJson;
  } catch (error) {
    throw new Error(`Failed to fetch weather: ${error}`);
  }
}

export default fetchWeather;
