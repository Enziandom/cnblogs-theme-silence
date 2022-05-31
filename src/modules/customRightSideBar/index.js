import "./index.less";
import { buildMyLinks } from "./mylinks";
import { buildNiceBooks } from "./niceBooks";

function buildCustomRightSideBar() {
  $("#main").append(`
    <div id="right-sidebar">
      <div class="right-sidebar-wrap">
        <div class="sidebar-content">
          ${ buildMyLinks() }
          ${ buildNiceBooks() }
        </div>
        <div style="height: 70px"></div>
      </div>
    </div>
  `);
}

export default buildCustomRightSideBar;