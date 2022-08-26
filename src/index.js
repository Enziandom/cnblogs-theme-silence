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
import Loader from "./components/Loader";
import { isPostPage, isRootPage } from "./utils/page-helper";
import { onRootPage, onPostPage, onHolePage, excludeHolePage } from "./utils/lifetime";

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
    onHolePage();
    if (isPostPage()) {
      createPostCatalog();
      createPostSponsor();
      createPostSignature();
      createHljsLineNumber();
      createPostCommentAvatars();
      createTextImage();
      onPostPage();
    } else {
      createRadarMap();
      excludeHolePage();
      if (isRootPage()) {
        onRootPage();
      }
    }
    Loader.hide();
  }
}

new Silence();
