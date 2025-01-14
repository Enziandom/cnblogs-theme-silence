import "./style/index.scss";
import options from "../../config/options";
import createMyLinks from "../../widgets/MyLinks";
import createNiceBooks from "../../widgets/NiceBooks";
import createDropdown from "../../widgets/Dropdown";

function createRightSidebar() {
  let $blueprint = $(`
    <div id="right-sidebar">
      <div class="sidebar-content"></div>
    </div>
  `);

  $("#main").append($blueprint);

  let $sidebar = $($blueprint).find(".sidebar-content");

  createDropdown(e => $sidebar.append(e), "常用链接", createMyLinks(options.myLinks.data), options.myLinks.iscollapse);
  createDropdown(e => $sidebar.append(e), "推荐书籍", createNiceBooks(options.niceBooks.data), options.niceBooks.iscollapse);
}

export default createRightSidebar;
