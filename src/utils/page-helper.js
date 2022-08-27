import { setCssByElementName, setCssByElementId } from "./css-helper";

export function isPostPage() {
  return $("#topics").length > 0;
}

function isPaging() {
  return $("#homepage_top_pager").length > 0;
}

function isTagListPage() {
  return $("#taglist_main").length > 0;
}

function isTagPostsPage() {
  return $(".forFlow .PostListTitle").length > 0;
}

function isEssayListPage() {
  return $(".forFlow .entrylistTitle").length > 0;
}

export function isHomePage() {
  return !(isPaging() || isTagListPage() || isTagPostsPage() || isEssayListPage());
}

export function delPostBodyTitleTocButton() {
  $("#topics .postTitle .cnblogs-toc-button").remove();
}

export function setPostBodyExternalLink() {
  $("#cnblogs_post_body a").each(function (index, el) {
    if (!$(el).find("img").length) {
      $(el).addClass("external-link");
    }
  });
}

export function setPostBodyForFlowCss() {
  $(".forFlow").css({
    "background-color": "var(--card-bg-color)",
    "border-radius": "10px",
    padding: "20px"
  });
}

export function setProperties(windowWidth, windowHeight, iscalcMainContent) {
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
