export function isPostPage() {
  return $("#topics").length > 0;
}

export function isPaging() {
  return $("#homepage_top_pager").length > 0;
}

// 是否为标签页
export function isTagListPage() {
  return $("#taglist_main").length > 0;
}

// 是否为标签文章页，包含日记页
export function isTagPostsPage() {
  return $(".forFlow .PostListTitle").length > 0;
}

// 是否为文章分类页
export function isEssayListPage() {
  return $(".forFlow .entrylistTitle").length > 0;
}

// 是否为首页
export function isHomePage() {
  return !(isTagListPage() || isTagPostsPage() || isEssayListPage());
}

// 删除文章页的一些节点
export function deleteDomForPostPage() {
  $("#sideBarMain .enzia-profile").remove();
  $("#sideBarMain #sidebar_news").remove();
  $("#sideBarMain #blog-calendar").remove();
}

// 给文章页插入一些节点
export function insertDomForPostPage() {}

// 给文章页插入一些类名
export function insertClassForPostPage() {
  $("#cnblogs_post_body a").each(function (index, el) {
    if (!$(el).find("img").length) {
      $(el).addClass("external-link");
    }
  });
}

// 给文章页插入一些 CSS 样式
export function insertCssForPostPage() {
  $(".forFlow").css({ padding: "10px 15px 10px 15px", "background-color": "var(--card-bg-color)" });
}
