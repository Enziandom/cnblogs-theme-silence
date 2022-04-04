import options from "@consts/options";
import "./index.less";

function buildPersonBoard() {
  $("#mainContent .forFlow").prepend(
    `
        <div id="person-board" class="day">
            <div id="board-title"></div>
            <div class="postCon">
                <div id="board-content" class="c_b_p_desc">
                </div>
            </div>
            <div id="signature" class="postDesc">
                <span>
                    @Signature：
                </span>
            </div>
        </div>
    `
  );

  if (options) {
    $("#board-title").append(options.personBoard.title);
    $("#board-content").append(options.personBoard.content);
    $("#signature").append(options.personBoard.signature);
  }
}

export default buildPersonBoard;
