import { insertClassForPostPage, insertCssForExcludePostPage, deleteDomForPostPage, insertCssForPostPage, insertDomForPostPage, insertDomForExcludePostPage } from "./page-helper";
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
}
