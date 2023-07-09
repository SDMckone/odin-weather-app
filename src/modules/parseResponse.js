function parseResponse(jsonResponse) {
  const cityName = jsonResponse.location.name;
  const regionName = jsonResponse.location.country;
  const currentTempF = jsonResponse.current.temp_f;
  const currentTempC = jsonResponse.current.temp_c;
  const currentCondition = jsonResponse.current.condition.text;
  const currentRain =
    jsonResponse.forecast.forecastday[0].day.daily_chance_of_rain;
}

export default parseResponse;
