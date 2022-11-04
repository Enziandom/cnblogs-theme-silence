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
