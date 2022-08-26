import { setCssByElementName, setCssByElementId } from "./css-helper";
import { delPostBodyTitleTocButton, setPostBodyExternalLink, setPostBodyForFlowCss } from "./page-helper";

export function onRootPage() {}

export function onPostPage() {
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

export function onHolePage() {}

export function excludeHolePage() {
  $(window).ready(function () {
    setProperties($(window).width(), $(window).height(), true);
    $("#mainContent").insertAfter("#sideBar");
    $("#sideBarMain").append(`<div style="height: 55px"></div>`);
  });

  $(".esa-toolbar").css({
    bottom: "55px"
  });

  $(window).on("resize", function () {
    setProperties($(window).width(), $(window).height(), true);
  });
}

function setProperties(windowWidth, windowHeight, iscalcMainContent) {
  setCssByElementName(":root", {
    "--window-width": `${windowWidth}px`,
    "--window-height": `${windowHeight}px`,
    "--content-height": `${windowHeight}px`
  });

  let contentWidth;
  let mainContentWidth;
  let sidebarWidth;
  if (!(windowWidth <= 990)) {
    contentWidth = windowWidth * 0.77;
    sidebarWidth = contentWidth * 0.16 + 40;
    if (iscalcMainContent) {
      mainContentWidth = contentWidth - (sidebarWidth * 2 + 20);
    } else {
      mainContentWidth = contentWidth;
    }
  } else {
    contentWidth = windowWidth;
    mainContentWidth = windowWidth;
  }

  setCssByElementName(":root", {
    "--content-width": `${contentWidth}px`,
    "--header-left": `${(windowWidth - contentWidth) / 2}px`,
    "--sidebar-width": `${sidebarWidth}px`
  });

  setCssByElementId("mainContent", {
    width: `${mainContentWidth}px`
  });
}
