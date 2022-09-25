import "./style/index.scss";
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
import createMenu from "./components/Menu";
import createPostTitle from "./components/PostTitle";
import Loader from "./components/Loader";
import createBackground from "./components/Background";
import { isTagListPage, isTagPostsPage, isEssayListPage, isPostPage, isHomePage } from "./utils/page-helper";
import { loadHomePageComponents, loadPostPageComponents, loadCommonComponents, loadExcludePostPageComponents } from "./utils/lifetime";

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
    createMenu();
    createBackground();
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
      } else if (isTagListPage()) {
        loadTagListPageComponents();
      } else if (isTagPostsPage()) {
        loadTagPostsPageComponents();
      } else if (isEssayListPage()) {
        loadEssayListPageComponents();
      }
    }
    Loader.hide();
  }
}

new Silence();
