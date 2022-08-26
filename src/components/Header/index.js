import "./style/index.less";
import "./style/index.pc.less";
import "./style/index.pmd.less";
import options from "../../config/options";

function createHeader() {
  if (options.navs) {
    let $navList = $("#navList");

    $navList.children().each(function (index, el) {
      if (!!!$(this).has("a").length) {
        $(el).remove();
      }
    });

    for (let i = 0; i < options.navs.length; i++) {
      $navList.find("li").eq(1).after(`
        <li>
          <a class="menu" target="_blank" href="${options.navs[i].url}">
            ${options.navs[i].title}
          </a>
        </li>
      `);
    }
  }

  $("#header").prepend(`<div class="mobile-navs-menu"><i class="fa fa-bars"></i></div>`);

  let $profile = $("#profile_block");

  console.log($profile);

  $("#home").append(`
    <div id="enzia-mobile-menu-mask" style="display: none;"></div>
    <div id="enzia-mobile-menu" style="display: none;">
      <div class="profile">
        <img class="avatar" src="https://img0.baidu.com/it/u=4015738813,598225989&fm=253&fmt=auto&app=120&f=JPEG?w=600&h=600" alt="" />
        <div class="blog-name">${options.mobileMenu.blogName}</div>
      </div>
    </div>
  `);

  $(".mobile-navs-menu").on("click", () => {
    $("#enzia-mobile-menu-mask").fadeIn();
    $("#enzia-mobile-menu").fadeIn();
  });

  $("#enzia-mobile-menu-mask").on("click", () => {
    $("#enzia-mobile-menu-mask").fadeOut();
    $("#enzia-mobile-menu").fadeOut();
  });
}

export default createHeader;
