import "./style/index.less";
import options from "../../config/options";
import createMyLinks from "./plugins/MyLinks";
import createNiceBooks from "./plugins/NiceBooks";
import createDropdown from "../../widgets/Dropdown";

function createRightSidebar() {
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

  createDropdown(e => $sidebar.append(e), "常用链接", createMyLinks(options.myLinks.data), options.myLinks.iscollapse);
  createDropdown(e => $sidebar.append(e), "推荐书籍", createNiceBooks(options.niceBooks.data), options.niceBooks.iscollapse);
}

export default createRightSidebar;
