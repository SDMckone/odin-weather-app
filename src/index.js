import Utils from "./modules/utils";

const apiKey = "341cfdefb31e4a3591803936230807";

const location = "Raleigh";

async function getWeather() {
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=8&aqi=no&alerts=no`
  );

  const data = await response.json();
  console.log(data);
  console.log(Utils.getDays(data));
  console.log(Utils.getTempsF(data));
  console.log(Utils.getRainChances(data));
}

getWeather();

console.log("hello");
