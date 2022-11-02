import { insertClassForPostPage, deleteDomForPostPage, insertCssForPostPage, insertDomForPostPage } from "./page-helper";
import { getMode, getTheme } from "../utils/theme-helper";
import { isMobile } from "../utils/device-helper";
import options from "../config/options";

// 加载首页的组件
export function loadHomePageComponents() {
  let $pagers = $("div.topicListFooter");

  if ($pagers.length >= 3) {
    $("#mainContent").prepend($pagers[0]);
    $("#mainContent").append($pagers[2]);
  } else {
    $("#mainContent").append($pagers[0]);
  }
}

// 加载文章的组件
export function loadPostPageComponents() {
  deleteDomForPostPage();
  insertDomForPostPage();
  insertClassForPostPage();
  insertCssForPostPage();

  if (options.sideToggle.post && !isMobile()) {
    $(".folding.tool-item").trigger("click");
  }
}

// 加载所有页面都需要的组件
export function loadCommonComponents() {
  $("html").attr("mode", getMode());
  $("html").attr("theme", getTheme());
}

// 加载除文章页以外的组件
export function loadExcludePostPageComponents() {}

// 加载标签分类页的组件
export function loadTagListPageComponents() {}

// 加载标签页的组件
export function loadTagPostsPageComponents() {
  let $pagers = $("div.pager").parent();
  $("#mainContent").prepend($pagers[1]);
  $("#mainContent").append($pagers[3]);
}

// 加载文章分类页的组件
export function loadEssayListPageComponents() {
  let $pagers = $("div.pager");
  $("#mainContent").prepend($pagers[0]);
  $("#mainContent").append($pagers[1]);
}
