import "./less/index.less";
import options from "./config/options";
import createComponentAsGithubCorner from "./components/GithubCorner";
import createComponentAsHeader from "./components/Header";
import createComponentAsRightSidebar from "./components/RightSidebar";
import createComponentAsProfile from "./components/Profile";
import createComponentAsPostCatalog from "./components/PostCatalog";
import createComponentAsPostSignature from "./components/PostSignature";
import createComponentAsPostSponsor from "./components/PostSponsor";
import createComponentAsPostCommentAvatars from "./components/PostCommentAvatars";
import createComponentAsHljsLineNumber from "./components/HljsLineNumber";
import createComponentAsToolbar from "./components/Toolbar";
import createComponentAsRadarMap from "./components/RadarMap";
import createComponentAsTextImage from "./components/TextImage";
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
    createComponentAsHeader();
    createComponentAsRightSidebar();
    createComponentAsGithubCorner();
    createComponentAsProfile();
    createComponentAsToolbar();
    if ( isPostPage() ) { // 文章页
      createComponentAsPostCatalog();
      createComponentAsPostSponsor();
      createComponentAsPostSignature();
      createComponentAsHljsLineNumber();
      createComponentAsPostCommentAvatars();
      createComponentAsTextImage();
      delPostBodyTitleTocButton();
      setPostBodyExternalLink();
      setPostBodyForFlowCss();
    } else { // 首页、标签页、文章页、分类页
      createComponentAsRadarMap();
      if ( isRootPage() ) { // 首页
      }
    }
    Loader.hide();
  }
}

new Silence();
