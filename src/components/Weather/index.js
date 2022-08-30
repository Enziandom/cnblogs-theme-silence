import options from "../../config/options";
import axios from "axios";
import "./index.less";

function createWeather() {
  if (!options.weather.isOpen) return;

  axios.get(`https://www.yiketianqi.com/free/day?appid=${options.weather.appid}&city=${options.weather.city}&appsecret=${options.weather.appsecret}&unescape=1`).then(({ data }) => {
    let bluepoint = `
        <div class="weather">
          <div class="city">${options.weather.city}</div>
          <div class="data">
            <div class="temper">${data.tem_night}°/${data.tem_day}°</div>
            <div class="type">${data.win}</div>
            <div class="wind">${data.wea}</div>
          </div>
        </div>
      `;
    $("#navList").prepend(bluepoint);
  });
}

export default createWeather;
