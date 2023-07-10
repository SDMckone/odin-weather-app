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
}

export default Utils;
