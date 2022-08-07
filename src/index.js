import "./less/index.less";
import options from "./config/options";
import createGithubCorner from "./components/GithubCorner";
import createHeader from "./components/Header";
import createRightSidebar from "./components/RightSidebar";
import createProfile from "./components/Profile";
import createPostCatalog from "./components/PostCatalog";
import createPostSignature from "./components/PostSignature";
import createPostSponsor from "./components/PostSponsor";
import createPostCommentAvatars from "./components/PostCommentAvatars";
import createHljsLineNumber from "./components/HljsLineNumber";
import createToolbar from "./components/Toolbar";
import createRadarMap from "./components/RadarMap";
import createTextImage from "./components/TextImage";
import Loader from "./components/Loader";
import { initializer } from "./utils/initializer";
import {
  isPostPage, isRootPage, delPostBodyTitleTocButton, setPostBodyExternalLink, setPostBodyForFlowCss
} from "./utils/page-helper";

initializer();

class Silence {
  constructor() {
    $.extend(true, options, window.$silence);
    this.init();
  }

  init() {
    createHeader();
    createRightSidebar();
    createGithubCorner();
    createProfile();
    createToolbar();
    if ( isPostPage() ) { // 文章页
      createPostCatalog();
      createPostSponsor();
      createPostSignature();
      createHljsLineNumber();
      createPostCommentAvatars();
      createTextImage();
      delPostBodyTitleTocButton();
      setPostBodyExternalLink();
      setPostBodyForFlowCss();
    } else { // 首页、标签页、文章页、分类页
      createRadarMap();
      if ( isRootPage() ) { // 首页
      }
    }
    Loader.hide();
  }
}

new Silence();
