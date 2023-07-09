class WeatherPanel {
  constructor(
    cityName,
    regionName,
    currentTemp,
    currentCondition,
    currentRain,
    forecastDays,
    forecastTemps,
    forecastRain,
    backgroundImage
  ) {
    // Name of this panel's city
    this.cityName = cityName;
    // Name of this panel's region (state if US, country otherwise)
    this.regionName = regionName;
    // This panel's current temp
    this.currentTemp = currentTemp;
    // This panel's current weather condition
    this.currentCondition = currentCondition;
    // This panel's current chance of rain
    this.currentRain = currentRain;
    // List of the next 7 days as 3 letter abbreviations
    this.forecastDays = forecastDays;
    // List of average temperatures for the next 7 days
    this.forecastTemps = forecastTemps;
    // List of chances of rain for the next 7 days
    this.forecastRain = forecastRain;
    // Background image for this panel
    this.backgroundImage = backgroundImage;
  }
}

export default WeatherPanel;
