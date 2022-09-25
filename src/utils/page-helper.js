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

export function deleteDomForPostPage() {
  $("#sideBarMain .enzia-profile").remove();
  $("#sideBarMain #sidebar_news").remove();
}

export function insertDomForPostPage() {
  let $menu = $(`<span class="menu tool-item" title="侧边菜单"><i class="fa fa-bars"></i></span>`);
  $("#enzia-tools .canbe-fade").append($menu);
  $($menu).on("click", e => {
    $("#enzia-mobile-menu-mask").fadeIn();
    $("#enzia-mobile-menu").fadeIn();
  });
}

export function insertClassForPostPage() {
  $("#cnblogs_post_body a").each(function (index, el) {
    if (!$(el).find("img").length) {
      $(el).addClass("external-link");
    }
  });
}

export function insertCssForPostPage() {
  $(".forFlow").css({ padding: "10px 15px 10px 15px" });
}
