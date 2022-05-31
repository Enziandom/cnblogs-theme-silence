import "./less/index.less";
import "./less/index.pc.less";
import "./less/index.pmd.less";

function buildCustomHeader() {
  $("#header").prepend(`<div class="mobile-navs-menu"><i class="fa fa-bars"></i></div>`);
  $(".mobile-navs-menu").on("click", () => {
    $("#navigator").fadeToggle();
  });
}

export default buildCustomHeader;
