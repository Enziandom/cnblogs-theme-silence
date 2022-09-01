import "./index.scss";
import options from "../../config/options";

function createStatus(el, isDesc) {
  const key = options.statusKey;
  const status = {
    activity: { color: "rgba(66, 185, 131, 0.95)", desc: "活跃中" },
    busyness: { color: "rgba(255, 69, 0, 0.95)", desc: "忙碌中" },
    growing: { color: "rgba(240,230,140, 0.95)", desc: "升级中" },
    idle: { color: "rgba(112,128,144, 0.95)", desc: "摸鱼中" }
  };

  let bluepoint = $(`
    <div class="bloger-status">
      <div class="bloger-status-icon" style="background-color: ${status[key].color}"></div>
    </div>
  `);

  if (isDesc) {
    bluepoint.append(`<div class="bloger-status-desc">${status[key].desc}</div>`);
  }

  $(el).append(bluepoint);
}

export default createStatus;
