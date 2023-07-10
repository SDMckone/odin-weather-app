import getWeatherData from "./modules/getWeatherData";
import parseResponse from "./modules/parseresponse";
import createWeatherPanel from "./modules/createWeatherPanel";
import createPanelForm from "./modules/createPanelForm";

const apiKey = "341cfdefb31e4a3591803936230807";
const locationList = [
  "Raleigh",
  "London",
  "Stockholm",
  // "Honolulu",
  // "Tokyo",
  // "Berlin",
  // "batman",
  // "chihuahua",
];
let weatherPanelGrid = document.querySelector("#weather-panel-grid");

async function main() {
  weatherPanelGrid.remove();
  const newWeatherPanelGrid = document.createElement("div");
  newWeatherPanelGrid.id = "weather-panel-grid";
  weatherPanelGrid = newWeatherPanelGrid;
  document.body.appendChild(weatherPanelGrid);

  for (let i = 0; i < locationList.length; i += 1) {
    const data = await getWeatherData(apiKey, locationList[i]);
    const weatherPanel = parseResponse(data);
    const weatherPanelDomElement = createWeatherPanel(weatherPanel);
    weatherPanelGrid.appendChild(weatherPanelDomElement);
  }

  const panelForm = createPanelForm();
  weatherPanelGrid.appendChild(panelForm);

  panelForm.addEventListener("submit", (event) => {
    event.preventDefault();
    locationList.push(panelForm.elements["panel-location"].value);
    console.log(locationList);
    main();
  });

  panelForm.elements["delete-location"].addEventListener("click", () => {
    panelForm.remove();
  });
}

main();
