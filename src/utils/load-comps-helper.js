import { getMode, getTheme, getToggle, setToggle } from "./localStorage-helper";

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
  $("html").attr("mode", getMode());
  $("html").attr("theme", getTheme());

  if (getToggle() !== "none") {
    $("#sideBarMain").css({ display: "block" });
    $("#mainContent").css({
      left: "12.5vw",
      width: "60.5vw"
    });
    setToggle("block");
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
