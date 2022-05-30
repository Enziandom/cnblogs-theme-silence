import "./index.less";

function buildCustomLeftSideBar() {
  $("#main").append(`
    <div id="left-sidebar">
      <div class="left-sidebar-wrap">
        <div class="sidebar-content"></div>
      </div>
    </div>
  `);
}

export default buildCustomLeftSideBar;