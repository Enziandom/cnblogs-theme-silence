import { delPostBodyTitleTocButton, setPostBodyExternalLink, setPostBodyForFlowCss, setProperties } from "./page-helper";

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
}

export function loadCommonComponents() {}

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
