/**
 * 当前页面是否为博文内容页。
 */
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

/**
 * 只是首页，不包括博客园的标签分类页、以标签展示文章页、随笔分类页、包含分页的页面。
 * @returns {boolean} 是首页返回 true；不是首页，或是其他页返回 false。
 */
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
 * 删除文章页文章标题的目录按钮
 */
export function removeTitleTocButton() {
    $(".post .postTitle .cnblogs-toc-button").remove();
}

export function removePostSideBarElements() {
    $("#sideBarMain").each((self, index, el) => {
        if (index < 3) {
            el.remove();
        }
    })
}