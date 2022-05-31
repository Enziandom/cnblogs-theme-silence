import { setCssByElementName, setCssByElementId } from "./style-injector";

function setProperties(windowWidth, windowHeight) {
  setCssByElementName(":root", {
    "--window-width": `${ windowWidth }px`,
    "--window-height": `${ windowHeight }px`,
    "--content-height": `${ windowHeight }px`
  });

  let contentWidth = windowWidth * 0.77;
  let sidebarWidth = contentWidth * 0.16 + 40;

  setCssByElementName(":root", {
    "--content-width": `${ contentWidth }px`,
    "--header-left": `${ (windowWidth - contentWidth) / 2 }px`,
    "--sidebar-width": `${ sidebarWidth }px`
  });

  setCssByElementId("mainContent", {
    "width": `${ contentWidth - (sidebarWidth * 2 + 20) }px`
  });
}

export function initializer() {
  $(window).ready(function () {
    setProperties($(window).width(), $(window).height());
    $("#mainContent").insertAfter("#sideBar");
    $("#sideBarMain").append(`<div style="height: 70px"></div>`);
    $(".right-sidebar-wrap").append(`<div style="height: 70px"></div>`);
  });

  $(window).on("resize", function () {
    setProperties($(window).width(), $(window).height());
  });
}
