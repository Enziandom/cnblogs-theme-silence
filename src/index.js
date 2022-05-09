import "./index.less";
import options from "./consts/options";
import {
    isPostPage,
    showSidebar,
    clearHtmlElement,
    addHtmlElement,
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
import buildPersonBoard from "./modules/personBoard";
import loader from "./modules/loader";

class Silence {
    constructor() {
        $.extend(true, options, window.$silence);
        this.building();
    }

    building() {
        clearHtmlElement();
        buildCustomHeader();
        buildCustomFooter();
        buildGithubCorner();
        buildProfile();
        buildToolbar();
        if (isPostPage()) {
            buildPostCatalog();
            buildPostSponsor();
            buildPostLightbox();
            buildPostSignature();
            buildHljsLineNumber();
            buildPostCommentAvatars();
            addHtmlElement();
        } else {
            showSidebar();
            buildPersonBoard();
        }
        loader.hide();
    }
}

new Silence();
