const apiKey = "341cfdefb31e4a3591803936230807";

const location = "London";

async function getWeather() {
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=7&aqi=no&alerts=no`
  );

  const data = await response.json();
  console.log(data);
}

getWeather();

console.log("hello");
