import getWeatherData from "./modules/getWeatherData";
import parseResponse from "./modules/parseresponse";
import createWeatherPanel from "./modules/createWeatherPanel";

const apiKey = "341cfdefb31e4a3591803936230807";
const locationList = [
  "Raleigh",
  "London",
  "Stockholm",
  "Honolulu",
  "Tokyo",
  "Berlin",
  "batman",
  "chihuahua",
];
const weatherPanelGrid = document.querySelector("#weather-panel-grid");

async function main() {
  for (let i = 0; i < locationList.length; i += 1) {
    const data = await getWeatherData(apiKey, locationList[i]);
    const weatherPanel = parseResponse(data);
    console.log(weatherPanel);
    const weatherPanelDomElement = createWeatherPanel(weatherPanel);
    weatherPanelGrid.appendChild(weatherPanelDomElement);
  }
}

main();
