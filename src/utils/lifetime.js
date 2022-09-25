import { insertClassForPostPage, deleteDomForPostPage, insertCssForPostPage, insertDomForPostPage } from "./page-helper";
import { getMode, getTheme } from "../utils/theme-helper";

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
}

// 加载所有页面都需要的组件
export function loadCommonComponents() {
  $("html").attr("mode", getMode());
  $("html").attr("theme", getTheme());
}

// 加载除文章页以外的页面所需要额组件
export function loadExcludePostPageComponents() {}

// 加载标签分类页的组件
export function loadTagListPageComponents() {
  let $pagers = $("div.pager").parent();

  if ($pagers.length > 0) {
    $("#mainContent").prepend($pagers[1]);
    $("#mainContent").append($pagers[2]);
  }
}

// 加载文章所属标签的组件
export function loadTagPostsPageComponents() {}

// 加载文章分类页的组件
export function loadEssayListPageComponents() {
  let $pagers = $("div.pager");

  if ($pagers.length > 0) {
    $("#mainContent").prepend($pagers[0]);
    $("#mainContent").append($pagers[1]);
  }
}
