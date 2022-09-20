import "./index.scss";
import options from "../../config/options";

function createBackground() {
  let ops = options.backgroundOps;

  if (ops && ops.url) {
    let $bgMatte = $(`
      <img class="enzia-bg-matte" src="${ops.url}" style="opacity: ${ops.opacity}" />
    `);
    if (ops.mainOpacity) {
      $("#home").css({ opacity: ops.mainOpacity });
    }
    $("body").append($bgMatte);
  }
}

export default createBackground;
