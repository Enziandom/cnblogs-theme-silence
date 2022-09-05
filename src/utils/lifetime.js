import {
  insertClassForPostPage,
  insertCssForExcludePostPage,
  deleteDomForPostPage,
  setGlobalPageCssVars,
  insertCssForPostPage,
  insertDomForPostPage,
  insertDomForExcludePostPage
} from "./page-helper";
import { getMode, getTheme } from "../utils/theme-helper";

export function loadHomePageComponents() {}

export function loadPostPageComponents() {
  deleteDomForPostPage();
  insertDomForPostPage();
  insertClassForPostPage();
  insertCssForPostPage();

  $(window).ready(function () {
    setGlobalPageCssVars(false);
  });

  $(window).on("resize", function () {
    setGlobalPageCssVars(false);
  });
}

export function loadCommonComponents() {
  let $html = $("html");
  $($html).attr("mode", getMode());
  $($html).attr("theme", getTheme());
}

export function loadExcludePostPageComponents() {
  insertCssForExcludePostPage();

  $(window).ready(function () {
    setGlobalPageCssVars(true);
    insertDomForExcludePostPage();
  });

  $(window).on("resize", function () {
    setGlobalPageCssVars(true);
  });
}
