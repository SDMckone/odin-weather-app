async function getWeatherData(apiKey, location) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=8&aqi=no&alerts=no`
  );

  const data = await response.json();

  return data;
}

export default getWeatherData;
