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

export function isRootPage() {
  return !(isPaging() || isTagListPage() || isTagPostsPage() || isEssayListPage());
}

// 删除文章页文章标题的目录按钮
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
