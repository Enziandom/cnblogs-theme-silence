import { insertClassForPostPage, insertCssForExcludePostPage, deleteDomForPostPage, insertCssForPostPage, insertDomForPostPage } from "./page-helper";
import { getMode, getTheme } from "../utils/theme-helper";

export function loadHomePageComponents() {}

export function loadPostPageComponents() {
  deleteDomForPostPage();
  insertDomForPostPage();
  insertClassForPostPage();
  insertCssForPostPage();
}

export function loadCommonComponents() {
  let $html = $("html");
  $($html).attr("mode", getMode());
  $($html).attr("theme", getTheme());
}

export function loadExcludePostPageComponents() {
  insertCssForExcludePostPage();

  let $pagers = $("div.topicListFooter");

  if ($pagers.length >= 3) {
    $("#mainContent").prepend($pagers[0]);
    $("#mainContent").append($pagers[2]);
  } else {
    $("#mainContent").append($pagers[0]);
  }
}
