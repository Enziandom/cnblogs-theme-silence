import options from "../../consts/options";
import "./index.less";

function buildBoard() {
    $("#mainContent .forFlow").prepend(
        `
          <div id="esa-board" class="day">
            <span id="esa-board-tag">
              <span id="esa-tag-content">${options.board.tag}</span>
              <span id="esa-board-title">${options.board.title}</span>
            </span>
            <div class="postCon">
                <div id="esa-board-content" class="c_b_p_desc">
                    ${options.board.content}
                </div>
            </div>
            <div id="signature" class="postDesc">
                <span style="font-size: ${options.board.signatureFontSize}px">
                    ${options.board.signature}
                </span>
            </div>
          </div>
        `
    );
}

export default buildBoard;
