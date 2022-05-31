import "./less/index.less";
import "./less/index.pc.less";
import "./less/index.pmd.less";
import options from "../../consts/options";

function buildCustomHeader() {
  if ( options.navs ) {
    for ( let i = 0; i < options.navs.length; i++ ) {
      $("#navList").find("li").eq(1).after(`
    <li>
      <a class="menu" target="_blank" href="${ options.navs[i].url }">
        ${ options.navs[i].title }
      </a>
    </li>
  `);
    }
  }

  $("#header").prepend(`<div class="mobile-navs-menu"><i class="fa fa-bars"></i></div>`);

  $(".mobile-navs-menu").on("click", () => {
    $("#navigator").fadeToggle();
  });
}

export default buildCustomHeader;
