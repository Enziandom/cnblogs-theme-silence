import "./less/index.less";
import createPluginAsMyLinks from "./plugins/mylinks";
import createPluginAsNiceBooks from "./plugins/niceBooks";
import createWidgetAsDropdown from "../../widgets/dropdown";
import options from "../../consts/options";

function buildCustomRightSideBar() {
  let $blueprint = $(`
    <div id="right-sidebar">
      <div class="sidebar-wrap">
        <div class="sidebar-content"></div>
        <div style="height: 55px"></div>
      </div>
    </div>
  `);

  $("#main").append($blueprint);

  let $sidebar = $($blueprint).find(".sidebar-content");

  createWidgetAsDropdown((e) => $sidebar.append(e), "常用链接", createPluginAsMyLinks(options.myLinks.data), options.myLinks.iscollapse);
  createWidgetAsDropdown((e) => $sidebar.append(e), "推荐书籍", createPluginAsNiceBooks(options.niceBooks.data), options.niceBooks.iscollapse);
}

export default buildCustomRightSideBar;