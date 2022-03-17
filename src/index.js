import "./index.less";
import options from "@consts/options";
import { isPostPage, showSidebar, clearElement } from "@consts/tools";
import buildGithubCorner from "@modules/githubCorner";
import buildCustomHeader from "@modules/customHeader";
import buildCustomFooter from "@modules/customFooter";
import buildProfile from "@modules/profile";
import buildPostCatlog from "@modules/postCatlog";
import buildPostLightbox from "@modules/postLightbox";
import buildPostSignature from "@modules/postSignature";
import buildPostSponsor from "@modules/postSponsor";
import buildPostCommentAvatars from "@modules/postCommentAvatars";
import buildPostHeader from "@modules/postHeader";
import buildHljsLineNumber from "@modules/hljsLineNumber";
import buildToolbar from "@modules/toolbar";
import loader from "@modules/loader";

class Silence {
  constructor() {
    this.init();
  }

  init() {
    $.extend(true, options, window.$silence, {
      screenWidth: window.screen.width,
    });

    clearElement();

    this.building();
  }

  building() {
    buildCustomHeader();
    buildCustomFooter();
    buildGithubCorner();
    buildProfile();
    buildToolbar();
    if (isPostPage()) {
      buildPostHeader();
      buildPostCatlog();
      buildPostLightbox();
      buildHljsLineNumber();
      buildPostSignature();
      buildPostSponsor();
      buildPostCommentAvatars();
    } else {
      showSidebar();
    }
    loader.hide();
  }
}

new Silence();
