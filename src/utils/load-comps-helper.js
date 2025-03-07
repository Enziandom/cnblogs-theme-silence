import { calcMode, getTheme, getToggle, setToggle } from "./storage-helper";
import { isMobile } from "./device-helper";

export function loadHomePageComponents() {
  let $pagers = $("div.topicListFooter");

  if ($pagers.length >= 3) {
    $("#mainContent").prepend($pagers[0]);
    $("#mainContent").append($pagers[2]);
  } else {
    $("#mainContent").append($pagers[0]);
  }
}

export function loadPostPageComponents() {
  $("#sideBarMain .enzia-profile").remove();
  $("#sideBarMain #sidebar_news").remove();
  $("#sideBarMain #blog-calendar").remove();

  $("#cnblogs_post_body a").each(function (index, el) {
    if (!$(el).find("img").length) {
      $(el).addClass("external-link");
    }
  });

  $(".forFlow").css({ padding: "10px 15px 10px 15px", "background-color": "var(--card-bg-color)" });
}

export function loadCommonComponents() {
  $("html").attr("mode", calcMode());
  $("html").attr("theme", getTheme());

  if (!isMobile()) {
    if (!getToggle()) setToggle("block");

    if (getToggle() === "none") {
      $("#sideBarMain").css({ display: "none" });
      $("#mainContent").css({
        left: "12.5vw",
        width: "60.5vw"
      });
    } else if (getToggle() === "block") {
      $("#sideBarMain").css({ display: "block" });
      $("#mainContent").css({
        left: "27vw",
        width: "46vw"
      });
    }
  }
}

export function loadExcludePostPageComponents() {}

export function loadTagListPageComponents() {}

export function loadTagPostsPageComponents() {
  let $pagers = $("div.pager").parent();
  $("#mainContent").prepend($pagers[1]);
  $("#mainContent").append($pagers[3]);
}

export function loadEssayListPageComponents() {
  let $pagers = $("div.pager");
  $("#mainContent").prepend($pagers[0]);
  $("#mainContent").append($pagers[1]);
}
