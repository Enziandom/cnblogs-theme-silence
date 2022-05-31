import "./less/index.less";
import buildMyLinks from "./modules/mylinks";
import buildNiceBooks from "./modules/niceBooks";

function buildCustomRightSideBar() {
  $("#main").append(`
    <div id="right-sidebar">
      <div class="sidebar-wrap">
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