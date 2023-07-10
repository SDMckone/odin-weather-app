import Utils from "./utils";
import WeatherPanel from "./weatherpanel";

function parseResponse(jsonResponse) {
  const cityName = jsonResponse.location.name;
  const regionName = jsonResponse.location.country;
  const currentTempF = Math.trunc(jsonResponse.current.temp_f);
  const currentTempC = Math.trunc(jsonResponse.current.temp_c);
  const currentCondition = jsonResponse.current.condition.text;
  const currentRain =
    jsonResponse.forecast.forecastday[0].day.daily_chance_of_rain;
  const forecastDays = Utils.getDays(jsonResponse);
  const forecastTempsF = Utils.getTempsF(jsonResponse);
  const forecastTempsC = Utils.getTempsC(jsonResponse);
  const forecastRain = Utils.getRainChances(jsonResponse);
  const backgroundImage = Utils.getBackgroundImage(jsonResponse);
  const useBlackText = Utils.useBlackText(jsonResponse);

  const weatherPanel = new WeatherPanel(
    cityName,
    regionName,
    currentTempF,
    currentTempC,
    currentCondition,
    currentRain,
    forecastDays,
    forecastTempsF,
    forecastTempsC,
    forecastRain,
    backgroundImage,
    useBlackText
  );

  return weatherPanel;
}

export default parseResponse;
