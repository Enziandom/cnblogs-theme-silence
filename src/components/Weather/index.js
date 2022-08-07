import options from "../../config/options";
import axios from "axios";
import "./index.less";

function createWeather() {
  axios
    .get(`http://wthrcdn.etouch.cn/WeatherApi?city=${ options.weather.city }`)
    .then((res) => {
      let $weather = $(new DOMParser().parseFromString(res.data, "text/xml")).find("weather").first();
      let highest = $weather.find("high").html().match("\\d+")[0];
      let lowest = $weather.find("low").html().match("\\d+")[0];
      let type = $weather.find("day > type").html();
      let wind = $weather.find("day > fengxiang").html();
      let bluepoint = `
        <div class="weather">
          <div class="city">${ options.weather.city }</div>
          <div class="data">
            <div class="temperature">${ lowest }°/${ highest }°</div>
            <div class="type">${ type }</div>
            <div class="wind">${ wind }</div>
          </div>
        </div>
      `;
      $("#navList").prepend(bluepoint);
    });
}

export default createWeather;