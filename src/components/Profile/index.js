import "./index.less";
import options from "../../config/options";

function createProfile() {
  const avatar = options.avatar;
  const favicon = options.favicon;
  const statusKey = options.statusKey;
  const blogerStatus = {
    activity: { color: "rgba(66, 185, 131, 0.95)", desc: "活跃中" },
    busyness: { color: "rgba(255, 69, 0, 0.95)", desc: "忙碌中" },
    growing: { color: "rgba(240,230,140, 0.95)", desc: "升级中" },
    idle: { color: "rgba(112,128,144, 0.95)", desc: "摸鱼中" }
  };

  let nowBlogerStatus = {};

  if ( avatar && statusKey ) {
    for ( let key in blogerStatus ) {
      if ( blogerStatus.hasOwnProperty(key) ) {
        if ( statusKey === key ) {
          nowBlogerStatus = blogerStatus[key];
        }
      }
    }

    $("#sideBarMain").prepend(`
            <div class="profile-avatar-wrap">
                <img class="esa-profile-avatar" src="${ avatar }" alt="profile-avatar"/>
                <div class="bloger-status">
                    <div class="bloger-status-icon" style="background-color: ${ nowBlogerStatus.color }"></div>
                    <div class="bloger-status-desc">${ nowBlogerStatus.desc }</div>
                </div>
            </div>
        `);
  }

  if ( favicon ) {
    $("#favicon").attr("href", favicon);
  }
}

export default createProfile;
