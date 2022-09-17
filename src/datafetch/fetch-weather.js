async function fetchWeather(link) {
  try {
    const res = await fetch(link);
    if (!res.ok) throw new Error('weather fetching failed');

    const resJson = await res.json();

    if (resJson.cod != '200') throw new Error(resJson.message);

    return resJson;
  } catch (error) {
    return error;
  }
}

export default fetchWeather;
