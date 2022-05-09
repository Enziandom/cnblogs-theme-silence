import options from "../../consts/options";
import "./index.less";

function buildPersonBoard() {
    $("#mainContent .forFlow").prepend(
        `
          <div id="person-board" class="day">
            <span id="board-tag">
              <span id="tag-content">${options.personBoard.tag}</span>
              <span id="board-title">${options.personBoard.title}</span>
            </span>
            <div class="postCon">
                <div id="board-content" class="c_b_p_desc">
                    ${options.personBoard.content}
                </div>
            </div>
            <div id="signature" class="postDesc">
                <span style="font-size: ${options.personBoard.signatureFontSize}px">
                    ${options.personBoard.signature}
                </span>
            </div>
          </div>
        `
    );
}

export default buildPersonBoard;
