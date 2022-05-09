/**
 * 当前页面是否为博文内容页。
 */
export function isPostPage() {
    return $("#topics").length > 0;
}

export function isPaging() {
    return $("#homepage_top_pager").length > 0;
}

export function isTagListPage() {
    return $("#taglist_main").length > 0;
}

export function isTagPostsPage() {
    return $(".forFlow .PostListTitle").length > 0;
}

export function isEssayListPage() {
    return $(".forFlow .entrylistTitle").length > 0;
}

export function justRootPage() {
    return !(isPaging() || isTagListPage() || isTagPostsPage() || isEssayListPage());
}

/**
 * 显示左侧边栏。
 */
export function showSidebar() {
    $(".forFlow").css({marginLeft: "260px"});
    $("#sideBar").show();
}

/**
 * 删除原生元素
 */
export function clearHtmlElement() {
    $(".post .postTitle .cnblogs-toc-button").remove();
}