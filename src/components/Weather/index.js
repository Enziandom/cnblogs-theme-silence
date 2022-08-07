import options from "../../config/options";
import axios from "axios";
import "./index.less";

function createWeather() {
  axios
    .get(`http://www.yiketianqi.com/free/day?appid=17593272&city=${ options.weather.city }&appsecret=5hMYdnuZ&unescape=1`)
    .then(({ data }) => {
      let bluepoint = `
        <div class="weather">
          <div class="city">${ options.weather.city }</div>
          <div class="data">
            <div class="temper">${ data.tem_night }°/${ data.tem_day }°</div>
            <div class="type">${ data.win }</div>
            <div class="wind">${ data.wea }</div>
          </div>
        </div>
      `;
      $("#navList").prepend(bluepoint);
    });
}

export default createWeather;