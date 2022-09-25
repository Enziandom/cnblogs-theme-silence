import { setCss } from "./css-helper";
import { isMobile } from "./device-helper";
import options from "../config/options";

export function isPostPage() {
  return $("#topics").length > 0;
}

function isPaging() {
  return $("#homepage_top_pager").length > 0;
}

function isTagListPage() {
  return $("#taglist_main").length > 0;
}

function isTagPostsPage() {
  return $(".forFlow .PostListTitle").length > 0;
}

function isEssayListPage() {
  return $(".forFlow .entrylistTitle").length > 0;
}

export function isHomePage() {
  return !(isPaging() || isTagListPage() || isTagPostsPage() || isEssayListPage());
}

export function deleteDomForPostPage() {
  $("#topics .postTitle .cnblogs-toc-button").remove();
}

export function insertDomForPostPage() {
  let $menu = $(`<span class="menu tool-item" title="侧边菜单"><i class="fa fa-bars"></i></span>`);
  $("#enzia-tools .canbe-fade").append($menu);
  $($menu).on("click", e => {
    $("#enzia-mobile-menu-mask").fadeIn();
    $("#enzia-mobile-menu").fadeIn();
  });
}

export function insertDomForExcludePostPage() {
  $("#mainContent").insertAfter("#sideBar");
}

export function insertClassForPostPage() {
  $("#cnblogs_post_body a").each(function (index, el) {
    if (!$(el).find("img").length) {
      $(el).addClass("external-link");
    }
  });
}

export function insertCssForPostPage() {
  setCss([{ "#sideBar": { display: "none" } }, { "#right-sidebar": { display: "none" } }, { ".forFlow": { "margin-bottom": "10px" } }]);

  if (isMobile()) {
    $(".forFlow").css({
      "background-color": "var(--card-bg-color)",
      "border-radius": "10px"
    });
  } else {
    $(".forFlow").css({
      "background-color": "var(--card-bg-color)",
      "border-radius": "10px",
      padding: "20px 30px"
    });
  }
}

export function insertCssForExcludePostPage() {
  if (isMobile()) {
    setCss([{ "#sideBar": { display: "none" } }, { "#right-sidebar": { display: "none" } }, { ".forFlow": { "margin-bottom": "10px", padding: "0" } }]);
  }
}

export function debounce(fn, wait) {
  var timer = null;
  return function () {
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, wait);
  };
}
