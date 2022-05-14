import options from "./options";

export const themeColors = {
    a: {color: '#2D8CF0', color2: '#79a2dc'},
    b: {color: '#FA7298', color2: '#e7b6c4'},
    c: {color: '#42B983', color2: '#89d7b2'},
    d: {color: '#607D8B', color2: '#a7c3d5'},
    e: {color: '#5E72E4', color2: '#8794da'},
    f: {color: '#FF9700', color2: '#e0bf95'},
    g: {color: '#FF5722', color2: '#e1aa97'},
    h: {color: '#009688', color2: '#83e0d0'},
    i: {color: '#673BB7', color2: '#a283d9'},
    j: {color: '#906f61', color2: '#e1865e'},
};

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

export function getTheme() {
    return sessionStorage.getItem(`silence-theme-${currentBlogApp}`) || options.defaultTheme;
}

export function getMode() {
    const hour = new Date().getHours();
    return sessionStorage.getItem(`silence-mode-${currentBlogApp}`) || (options.defaultMode === "auto"
        ? hour >= 6 && hour < 18 ? "light" : "dark" : options.defaultMode);
}

export function setMode() {
    const htmlDom = $("html");
    const mode = $(htmlDom).attr("mode") === "light" ? "dark" : "light";
    sessionStorage.setItem(`silence-mode-${currentBlogApp}`, mode);
    $(htmlDom).attr("mode", mode);
}

export function setTheme(theme) {
    sessionStorage.setItem(`silence-theme-${currentBlogApp}`, theme);
    $("html").attr("theme", theme);
}