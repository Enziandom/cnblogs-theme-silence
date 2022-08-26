import { setCssByElementName, setCssByElementId } from "./css-helper";

function setProperties(windowWidth, windowHeight) {
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
    mainContentWidth = contentWidth - (sidebarWidth * 2 + 20);
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

export function initializer() {
  $(window).ready(function () {
    setProperties($(window).width(), $(window).height());
    $("#mainContent").insertAfter("#sideBar");
    $("#sideBarMain").append(`<div style="height: 55px"></div>`);
  });

  $(window).on("resize", function () {
    setProperties($(window).width(), $(window).height());
  });
}
