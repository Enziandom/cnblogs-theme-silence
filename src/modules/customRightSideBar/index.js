import "./less/index.less";
import buildMyLinks from "./modules/mylinks";
import buildNiceBooks from "./modules/niceBooks";
import createWidgetAsDropdown from "../../widgets/dropdown";

function buildCustomRightSideBar() {
  let blueprint = $(`
    <div id="right-sidebar">
      <div class="sidebar-wrap">
        <div class="sidebar-content"></div>
        <div style="height: 55px"></div>
      </div>
    </div>
  `);

  $("#main").append(blueprint);

  let $sidebar = $(blueprint).find(".sidebar-content");

  createWidgetAsDropdown($sidebar, "常用链接", buildMyLinks());
  createWidgetAsDropdown($sidebar, "推荐书籍", buildNiceBooks());
}

export default buildCustomRightSideBar;