import "./index.scss";
import "./index.pmd.scss";
import options from "../../config/options";

function createPostTitle() {
  let $postDesc = $(".postDesc").clone();
  let $spans = $postDesc.find("span").clone();
  let $as = $postDesc.find("a").clone();

  let bluepoint = $(`
    <div class="enzia-post-desc">
        <div class="user item"><span><i class="fa fa-user-o" aria-hidden="true"></i></span><a href="${$as[0].href}">${$as[0].innerText}</a></div>
        <div class="post-date item"><span><i class="fa fa-clock-o" aria-hidden="true"></i></span>${$spans[0].innerText}</div>
        <div class="read-num item"><span><i class="fa fa-eye" aria-hidden="true"></i></span>${$spans[1].innerText}次阅读</div>
        <div class="comm-num item"><span><i class="fa fa-comments-o" aria-hidden="true"></i></span>${$spans[2].innerText}条评论</div>
        <div class="edit-btn item"><span><i class="fa fa-pencil-square-o" aria-hidden="true"></i></span><a href="${$as[2].href}" target="_blank">${$as[2].innerText}</a></div>
        <svg fill="var(--text-color)" t="1661793881205" class="control-font-size item" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1361" width="16" height="16"><path d="M920 416H616c-4.4 0-8 3.6-8 8v112c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-56h60v320h-46c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h164c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8h-46V480h60v56c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V424c0-4.4-3.6-8-8-8z" p-id="1362"></path><path d="M656 296V168c0-4.4-3.6-8-8-8H104c-4.4 0-8 3.6-8 8v128c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-64h168v560h-92c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-92V232h168v64c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8z" p-id="1363"></path></svg>
    </div>
  `);

  $(".postTitle").after(bluepoint);

  let fontSize = options.postFontOps.min;

  $("#topics .postBody").css({
    "font-size": fontSize + "px"
  });

  $(".control-font-size").on("click", () => {
    fontSize++;
    if (fontSize > options.postFontOps.max) {
      fontSize = options.postFontOps.min;
    }
    $("#topics .postBody").css({
      "font-size": fontSize + "px"
    });
  });
}

export default createPostTitle;
