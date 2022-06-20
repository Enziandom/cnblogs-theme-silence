import "./less/index.less";
import options from "./consts/options";

import buildGithubCorner from "./modules/githubCorner";
import buildCustomHeader from "./modules/customHeader";
import buildCustomRightSideBar from "./modules/customRightSideBar";
import buildProfile from "./modules/profile";
import buildPostCatalog from "./modules/postCatalog";
import buildPostSignature from "./modules/postSignature";
import buildPostSponsor from "./modules/postSponsor";
import buildPostCommentAvatars from "./modules/postCommentAvatars";
import buildHljsLineNumber from "./modules/hljsLineNumber";
import buildToolbar from "./modules/toolbar";
import buildRadarMap from "./modules/radarMap";
import buildTextImage from "./modules/textImage";
import loader from "./modules/loader";

import { initializer } from "./utils/initializer";
import {
  isPostPage,
  isRootPage,
  delPostBodyTitleTocButton,
  setPostBodyExternalLink,
  setPostBodyForFlowCss
} from "./utils/page-helper";

initializer();

class Silence {
  constructor() {
    $.extend(true, options, window.$silence);
    this.init();
  }

  init() {
    buildCustomHeader();
    buildCustomRightSideBar();
    buildGithubCorner();
    buildProfile();
    buildToolbar();
    if ( isPostPage() ) { // 文章页
      buildPostCatalog();
      buildPostSponsor();
      buildPostSignature();
      buildHljsLineNumber();
      buildPostCommentAvatars();
      buildTextImage();
      delPostBodyTitleTocButton();
      setPostBodyExternalLink();
      setPostBodyForFlowCss();
    } else { // 首页、标签页、文章页、分类页
      buildRadarMap();
      if ( isRootPage() ) { // 首页
      }
    }
    loader.hide();
  }
}

new Silence();
