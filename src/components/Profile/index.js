import "./index.less";
import options from "../../config/options";

function createProfile() {
  const avatar = options.avatar;
  const favicon = options.favicon;
  const key = options.statusKey;
  const status = {
    activity: { color: "rgba(66, 185, 131, 0.95)", desc: "活跃中" },
    busyness: { color: "rgba(255, 69, 0, 0.95)", desc: "忙碌中" },
    growing: { color: "rgba(240,230,140, 0.95)", desc: "升级中" },
    idle: { color: "rgba(112,128,144, 0.95)", desc: "摸鱼中" }
  };

  if (avatar && key) {
    let state = {};

    if (status.hasOwnProperty(key)) {
      state = status[key];
    }

    $("#sideBarMain").prepend(`
      <div class="enzia-profile">
        <img class="avatar" src="${avatar}" alt="profile-avatar"/>
        <div class="status">
          <div class="status-icon" style="background-color: ${state.color}"></div>
          <div class="status-desc">${state.desc}</div>
        </div>
      </div>
    `);
  }

  if (favicon) {
    $("#favicon").attr("href", favicon);
  }
}

export default createProfile;
