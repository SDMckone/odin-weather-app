import getWeatherData from "./modules/getWeatherData";
import parseResponse from "./modules/parseresponse";
import createWeatherPanel from "./modules/createWeatherPanel";
import createPanelForm from "./modules/createPanelForm";
import createAddPanelButton from "./modules/createAddPanelButton";

const apiKey = "341cfdefb31e4a3591803936230807";

let weatherPanelGrid = document.querySelector("#weather-panel-grid");

if (JSON.parse(localStorage.getItem("locationList") === null)) {
  localStorage.setItem(
    "locationList",
    JSON.stringify(["NYC", "Tokyo", "London"])
  );
}

async function main() {
  weatherPanelGrid.remove();
  const newWeatherPanelGrid = document.createElement("div");
  newWeatherPanelGrid.id = "weather-panel-grid";
  weatherPanelGrid = newWeatherPanelGrid;
  document.body.appendChild(weatherPanelGrid);

  for (
    let i = 0;
    i < JSON.parse(localStorage.getItem("locationList")).length;
    i += 1
  ) {
    const data = await getWeatherData(
      apiKey,
      JSON.parse(localStorage.getItem("locationList"))[i]
    );

    if (data.error !== undefined) {
      const tempList = JSON.parse(localStorage.getItem("locationList"));
      tempList.splice(i, 1);
      localStorage.setItem("locationList", JSON.stringify(tempList));
      continue;
    }

    const weatherPanel = parseResponse(data);
    const weatherPanelDomElement = createWeatherPanel(weatherPanel);
    weatherPanelDomElement.addEventListener("click", () => {
      weatherPanelDomElement.remove();
      const tempList = JSON.parse(localStorage.getItem("locationList"));
      tempList.splice(i, 1);
      localStorage.setItem("locationList", JSON.stringify(tempList));
    });

    weatherPanelGrid.appendChild(weatherPanelDomElement);
    console.log(JSON.parse(localStorage.getItem("locationList")));
  }

  const panelButton = createAddPanelButton();
  panelButton.addEventListener("click", () => {
    panelButton.remove();

    const panelForm = createPanelForm();

    panelForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const tempList = JSON.parse(localStorage.getItem("locationList"));
      tempList.push(panelForm.elements["panel-location"].value);
      localStorage.setItem("locationList", JSON.stringify(tempList));
      main();
    });

    panelForm.elements["delete-location"].addEventListener("click", () => {
      panelForm.remove();
      weatherPanelGrid.appendChild(panelButton);
    });

    weatherPanelGrid.appendChild(panelForm);
  });

  weatherPanelGrid.appendChild(panelButton);
}

main();
