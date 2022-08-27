import "./style/index.less";
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
import createWeather from "./components/Weather";
import createMenu from "./components/Menu";
import createPostTitle from "./components/PostTitle";
import Loader from "./components/Loader";
import { isPostPage, isHomePage } from "./utils/page-helper";
import { loadHomePageComponents, loadPostPageComponents, loadCommonComponents, loadExcludePostPageComponents } from "./utils/lifetime";

class Silence {
  constructor() {
    $.extend(true, options, window.$silence);
    this.init();
  }

  init() {
    createHeader();
    createWeather();
    createRightSidebar();
    createGithubCorner();
    createProfile();
    createToolbar();
    createMenu();
    loadCommonComponents();
    if (isPostPage()) {
      createPostCatalog();
      createPostSponsor();
      createPostSignature();
      createHljsLineNumber();
      createPostCommentAvatars();
      createTextImage();
      createPostTitle();
      loadPostPageComponents();
    } else {
      createRadarMap();
      loadExcludePostPageComponents();
      if (isHomePage()) {
        loadHomePageComponents();
      }
    }
    Loader.hide();
  }
}

new Silence();
