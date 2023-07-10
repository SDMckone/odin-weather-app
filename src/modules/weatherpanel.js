class WeatherPanel {
  constructor(
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
  ) {
    // Name of this panel's city
    this.cityName = cityName;
    // Name of this panel's region (state if US, country otherwise)
    this.regionName = regionName;
    // This panel's current temp in Fahrenheit
    this.currentTempF = currentTempF;
    // This panel's current temp in Celsius
    this.currentTempC = currentTempC;
    // This panel's current weather condition
    this.currentCondition = currentCondition;
    // This panel's current chance of rain
    this.currentRain = currentRain;
    // List of the next 7 days as 3 letter abbreviations
    this.forecastDays = forecastDays;
    // List of average temperatures for the next 7 days in Fahrenheit
    this.forecastTempsF = forecastTempsF;
    // List of average temperatures for the next 7 days in Celsius
    this.forecastTempsC = forecastTempsC;
    // List of chances of rain for the next 7 days
    this.forecastRain = forecastRain;
    // Background image for this panel
    this.backgroundImage = backgroundImage;
    // Whether to use black text for this panel
    this.useBlackText = useBlackText;
  }
}

export default WeatherPanel;
