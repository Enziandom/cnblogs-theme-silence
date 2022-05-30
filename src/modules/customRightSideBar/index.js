import "./index.less";
import { buildMyLinks } from "./mylinks";

function buildCustomRightSideBar() {
  $("#main").append(`
    <div id="right-sidebar">
      <div class="right-sidebar-wrap">
        <div class="sidebar-content">
          ${buildMyLinks()}
        </div>
      </div>
    </div>
  `);
}

export default buildCustomRightSideBar;