export function setRootProperties(width, height) {
  $(":root").css({
    "--window-width": `${ width }px`,
    "--window-height": `${ height }px`
  });
  setSomeDomStyle(width, height);
}

export function listenWindowResize() {
  $(window).on("resize", function () {
    setRootProperties($(this).width(), $(this).height());
  });
}

export function setSomeDomStyle(width, height) {
  let calcWidth = width * 0.77;
  let sidebarWidth = calcWidth * 0.16 + 40;

  $(":root").css({
    "--content-main-width": `${ calcWidth }px`,
    "--content-main-height": `${ height }px`,
    "--header-left": `${ (width - calcWidth) / 2 }px`,
    "--sidebar-width": `${ sidebarWidth }px`
  });

  $("#mainContent").css({
    "width": `${ calcWidth - (sidebarWidth * 2 + 20) }`
  });
}
