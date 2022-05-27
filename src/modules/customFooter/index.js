import "./index.less";

function buildCustomFooter() {
  $("#footer").append(`
    <span class="shira-copyright">
      & Theme <a href="https://gitee.com/shiramashiro/cnblogs-theme-silence" target="_blank">Silence Rebuild By shiramashiro</a>
    </span>
  `);
}

export default buildCustomFooter;