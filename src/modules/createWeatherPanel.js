function createWeatherPanel(weatherPanelItem, useCelsius) {
  const weatherPanel = document.createElement("div");
  weatherPanel.classList.add("weather-panel");
  weatherPanel.style.backgroundImage = `url(${weatherPanelItem.backgroundImage})`;

  const topSection = document.createElement("div");
  topSection.classList.add("top-section");

  const leftSection = document.createElement("div");
  leftSection.classList.add("left-section");

  const title1 = document.createElement("h2");
  title1.textContent = weatherPanelItem.cityName;
  leftSection.appendChild(title1);

  const title2 = document.createElement("h2");
  title2.textContent = weatherPanelItem.regionName;
  leftSection.appendChild(title2);

  const rightSection = document.createElement("div");
  rightSection.classList.add("right-section");

  topSection.appendChild(leftSection);

  const temp = document.createElement("h3");
  if (useCelsius) {
    temp.textContent = `${weatherPanelItem.currentTempC}C`;
  } else {
    temp.textContent = `${weatherPanelItem.currentTempF}F`;
  }
  rightSection.appendChild(temp);

  const condition = document.createElement("h4");
  condition.textContent = weatherPanelItem.currentCondition;
  rightSection.appendChild(condition);

  const rain = document.createElement("h4");
  rain.textContent = `${weatherPanelItem.currentRain}% rain`;
  rightSection.appendChild(rain);

  topSection.appendChild(rightSection);

  weatherPanel.appendChild(topSection);

  const bottomSection = document.createElement("div");
  bottomSection.classList.add("bottom-section");

  const calendarIcon = document.createElement("img");

  if (weatherPanelItem.useBlackText) {
    calendarIcon.src = "Assets/Icons/calendar.svg";
  } else {
    calendarIcon.src = "Assets/Icons/calendar-white.svg";
  }

  calendarIcon.classList.add("icon");
  bottomSection.appendChild(calendarIcon);

  for (let i = 0; i < weatherPanelItem.forecastDays.length; i += 1) {
    const day = document.createElement("p");
    day.classList.add("day");
    day.textContent = weatherPanelItem.forecastDays[i];
    bottomSection.appendChild(day);
  }

  const tempIcon = document.createElement("img");

  if (weatherPanelItem.useBlackText) {
    tempIcon.src = "Assets/Icons/temp.svg";
  } else {
    tempIcon.src = "Assets/Icons/temp-white.svg";
  }

  tempIcon.classList.add("icon");
  bottomSection.appendChild(tempIcon);

  for (let i = 0; i < weatherPanelItem.forecastTempsF.length; i += 1) {
    const forecastTemp = document.createElement("p");
    forecastTemp.classList.add("forecast-temp");

    if (useCelsius) {
      forecastTemp.textContent = `${weatherPanelItem.forecastTempsC[i]}C`;
    } else {
      forecastTemp.textContent = `${weatherPanelItem.forecastTempsF[i]}F`;
    }
    bottomSection.appendChild(forecastTemp);
  }

  const rainIcon = document.createElement("img");

  if (weatherPanelItem.useBlackText) {
    rainIcon.src = "Assets/Icons/rain.svg";
  } else {
    rainIcon.src = "Assets/Icons/rain-white.svg";
  }

  rainIcon.classList.add("icon");
  bottomSection.appendChild(rainIcon);

  for (let i = 0; i < weatherPanelItem.forecastRain.length; i += 1) {
    const forecastRain = document.createElement("p");
    forecastRain.classList.add("forecast-rain");
    forecastRain.textContent = `${weatherPanelItem.forecastRain[i]}%`;
    bottomSection.appendChild(forecastRain);
  }

  weatherPanel.appendChild(bottomSection);
  for (let i = 0; i < weatherPanel.children.length; i += 1) {
    if (!weatherPanelItem.useBlackText) {
      weatherPanel.children[i].style.color = "white";
    }
  }

  return weatherPanel;
}

export default createWeatherPanel;
