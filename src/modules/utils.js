import moment from "moment/moment";

class Utils {
  static getDays(jsonResponse) {
    const forecastDay = jsonResponse.forecast.forecastday;
    const dayList = [];

    for (let i = 1; i < forecastDay.length; i += 1) {
      const dt = moment(forecastDay[i].date).format("dddd").substring(0, 3);
      dayList.push(dt);
    }

    return dayList;
  }

  static getTempsF(jsonResponse) {
    const forecastDay = jsonResponse.forecast.forecastday;
    const tempList = [];

    for (let i = 1; i < forecastDay.length; i += 1) {
      tempList.push(forecastDay[i].day.avgtemp_f);
    }

    return tempList;
  }

  static getTempsC(jsonResponse) {
    const forecastDay = jsonResponse.forecast.forecastday;
    const tempList = [];

    for (let i = 1; i < forecastDay.length; i += 1) {
      tempList.push(forecastDay[i].day.avgtemp_c);
    }

    return tempList;
  }

  static getRainChances(jsonResponse) {
    const forecastDay = jsonResponse.forecast.forecastday;
    const rainChanceList = [];

    for (let i = 1; i < forecastDay.length; i += 1) {
      rainChanceList.push(forecastDay[i].day.daily_chance_of_rain);
    }

    return rainChanceList;
  }

  static getBackgroundImage(jsonResponse) {
    const currentCondition = jsonResponse.current.condition.text;
    switch (currentCondition) {
      case "Sunny":
        return "../../dist/Assets/Images/sunny.jpg";
      case "Clear":
        return "../../dist/Assets/Images/clear.jpg";
      case "Partly Cloudy":
        return "../../dist/Assets/Images/partly_cloudy.jpg";
      case "Cloudy":
        return "../../dist/Assets/Images/cloudy.jpg";
      case "Overcast":
        return "../../dist/Assets/Images/overcast.jpg";
      case "Mist":
      case "Fog":
      case "Freezing fog":
        return "../../dist/Assets/Images/foggy.jpg";
      case "Patchy rain possible":
      case "Patchy sleet possible":
      case "Patchy freezing drizzle possible":
      case "Patchy light drizzle":
      case "Light drizzle":
      case "Freezing drizzle":
      case "Heavy freezing drizzle":
      case "Patchy light rain":
      case "Light rain":
      case "Moderate rain at times":
      case "Moderate rain":
      case "Heavy rain at times":
      case "Heavy rain":
      case "Light freezing rain":
      case "Moderate or heavy freezing rain":
      case "Light sleet":
      case "Moderate or heavy sleet":
      case "Light rain shower":
      case "Moderate or heavy rain shower":
      case "Torrential rain shower":
      case "Light sleet showers":
      case "Moderate or heavy sleet showers":
        return "../../dist/Assets/Images/rainy.jpg";
      case "Patchy snow possible":
      case "Blowing snow":
      case "Patchy light snow":
      case "Light snow":
      case "Patchy moderate snow":
      case "Moderate snow":
      case "Patchy heavy snow":
      case "Heavy snow":
      case "Ice pellets":
      case "Light snow showers":
      case "Moderate or heavy snow showers":
      case "Light showers of ice pellets":
      case "Moderate or heavy showers of ice pellets":
        return "../../dist/Assets/Images/snowy.jpg";
      case "Thundery outbreaks possible":
      case "Patchy light rain with thunder":
      case "Moderate or heavy rain with thunder":
      case "Patchy light snow with thunder":
      case "Moderate or heavy snow with thunder":
        return "../../dist/Assets/Images/stormy.jpg";
      case "Blizzard":
        return "../../dist/Assets/Images/blizzard.jpg";
      default:
        return "../../dist/Assets/Images/sunny.jpg";
    }
  }
}

export default Utils;
