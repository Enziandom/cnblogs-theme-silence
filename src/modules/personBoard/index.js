import options from "@consts/options";
import "./index.less";

function buildPersonBoard() {
  let pager = $("#homepage_top_pager").length;
  let postListTitle = $(".forFlow .PostListTitle").length;
  let tagListMain = $("#taglist_main").length;
  let entryListTitle = $(".forFlow .entrylistTitle").length;
  if (pager > 0 || postListTitle > 0 || tagListMain > 0 || entryListTitle > 0) {
    return;
  }

  $("#mainContent .forFlow").prepend(
    `
      <div id="person-board" class="day">
        <span id="board-tag">
          <span id="tag-content"></span>
          <span id="board-title"></span>
        </span>
        <div class="postCon">
            <div id="board-content" class="c_b_p_desc">
            </div>
        </div>
        <div id="signature" class="postDesc">
            <span>
                @signature:
            </span>
        </div>
      </div>
    `
  );

  if (options) {
    $("#tag-content").append(options.personBoard.tag);
    $("#board-title").append(options.personBoard.title);
    $("#board-content").append(options.personBoard.content);
    $("#signature").append(options.personBoard.signature);
  }
}

export default buildPersonBoard;
