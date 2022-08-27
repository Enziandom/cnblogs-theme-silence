import { delPostBodyTitleTocButton, setPostBodyExternalLink, setPostBodyForFlowCss, setProperties } from "./page-helper";
import { getMode, getTheme } from "../utils/theme-helper";

export function loadHomePageComponents() {}

export function loadPostPageComponents() {
  delPostBodyTitleTocButton();
  setPostBodyExternalLink();
  setPostBodyForFlowCss();

  $("#sideBar").css({ display: "none" });
  $("#right-sidebar").css({ display: "none" });
  $("#mainContent").css({ margin: "initial" });

  $(window).ready(function () {
    setProperties($(window).width(), $(window).height(), false);
  });

  $(window).on("resize", function () {
    setProperties($(window).width(), $(window).height(), false);
  });

  let $menu = $(`<span class="menu tool-item" title="侧边菜单"><i class="fa fa-bars"></i></span>`);

  $("#enzia-tools .canbe-fade").append($menu);

  $($menu).on("click", e => {
    $("#enzia-mobile-menu-mask").fadeIn();
    $("#enzia-mobile-menu").fadeIn();
  });
}

export function loadCommonComponents() {
  let $html = $("html");
  $($html).attr("mode", getMode());
  $($html).attr("theme", getTheme());
}

export function loadExcludePostPageComponents() {
  $(".esa-toolbar").css({
    bottom: "55px"
  });

  $(window).ready(function () {
    setProperties($(window).width(), $(window).height(), true);
    $("#mainContent").insertAfter("#sideBar");
    $("#sideBarMain").append(`<div style="height: 55px"></div>`);
  });

  $(window).on("resize", function () {
    setProperties($(window).width(), $(window).height(), true);
  });
}
