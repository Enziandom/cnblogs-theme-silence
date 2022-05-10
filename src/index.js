import "./index.less";
import options from "./consts/options";
import {
    isPostPage,
    justRootPage,
    showSidebar,
    removeTitleTocButton,
} from "./consts/tools";
import buildGithubCorner from "./modules/githubCorner";
import buildCustomHeader from "./modules/customHeader";
import buildCustomFooter from "./modules/customFooter";
import buildProfile from "./modules/profile";
import buildPostCatalog from "./modules/postCatalog";
import buildPostLightbox from "./modules/postLightbox";
import buildPostSignature from "./modules/postSignature";
import buildPostSponsor from "./modules/postSponsor";
import buildPostCommentAvatars from "./modules/postCommentAvatars";
import buildHljsLineNumber from "./modules/hljsLineNumber";
import buildToolbar from "./modules/toolbar";
import buildBoard from "./modules/board";
import loader from "./modules/loader";

class Silence {
    constructor() {
        $.extend(true, options, window.$silence);
        this.building();
    }

    building() {
        showSidebar();
        buildCustomHeader();
        buildCustomFooter();
        buildGithubCorner();
        buildProfile();
        buildToolbar();
        if (isPostPage()) { // 只是文章页
            buildPostCatalog();
            buildPostSponsor();
            buildPostLightbox();
            buildPostSignature();
            buildHljsLineNumber();
            buildPostCommentAvatars();
            removeTitleTocButton();
        } else { // 包括首页、标签页、文章页、分类页
            if (justRootPage()) { // 只是首页，不包括标签页、文章页、分类页
                buildBoard();
            }
        }
        loader.hide();
    }
}

new Silence();
