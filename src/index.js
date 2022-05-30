import "./index.less";
import options from "./consts/options";
import { isPostPage, justRootPage, showSidebar, removeTitleTocButton, addAttrForATag } from "./consts/tools";
import buildGithubCorner from "./modules/githubCorner";
import buildCustomHeader from "./modules/customHeader";
import buildCustomSideBar from "./modules/customSideBar";
import buildCustomLeftSideBar from "./modules/customLeftSideBar";
import buildProfile from "./modules/profile";
import buildPostCatalog from "./modules/postCatalog";
import buildPostLightbox from "./modules/postLightbox";
import buildPostSignature from "./modules/postSignature";
import buildPostSponsor from "./modules/postSponsor";
import buildPostCommentAvatars from "./modules/postCommentAvatars";
import buildHljsLineNumber from "./modules/hljsLineNumber";
import buildToolbar from "./modules/toolbar";
import buildRadarMap from "./modules/radarMap";
import loader from "./modules/loader";
import { listenWindowResize, setRootProperties } from "./utils/initialize-variable";

$(function () {
  setRootProperties($(window).width(), $(window).height());
  listenWindowResize();

  $("#mainContent").insertAfter("#sideBar");
  $("#sidebar_categories").insertAfter(".personal-tech");
  $("#sideBarMain").append(`<div style="height: 70px"></div>`)
  $(".left-sidebar-wrap").append(`<div style="height: 70px"></div>`)
});

class Silence {
  constructor() {
    $.extend(true, options, window.$silence);
    this.building();
  }

  building() {
    showSidebar();
    buildCustomSideBar();
    buildCustomHeader();
    buildCustomLeftSideBar();
    buildGithubCorner();
    buildProfile();
    buildToolbar();
    if ( isPostPage() ) { // 只是文章页
      buildPostCatalog();
      buildPostSponsor();
      buildPostLightbox();
      buildPostSignature();
      buildHljsLineNumber();
      buildPostCommentAvatars();
      removeTitleTocButton();
      addAttrForATag();
    } else { // 包括首页、标签页、文章页、分类页
      buildRadarMap();
      if ( justRootPage() ) {// 只是首页，不包括标签页、文章页、分类页
      }
    }
    loader.hide();
  }
}

new Silence();
