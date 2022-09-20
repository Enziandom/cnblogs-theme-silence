import "./index.scss";
import options from "../../config/options";

function find(arr, _el) {
  return !!arr.find(el => el === _el);
}

function createBackground() {
  let ops = options.backgroundOps;

  if (ops && ops.url) {
    let $bgMatte = $(`
      <img class="enzia-bg-matte" src="${ops.url}" style="opacity: ${ops.opacity}" />
    `);
    if (ops.mainOpacity) {
      $("#home").css({ opacity: ops.mainOpacity });
    }
    if (ops.objectFit) {
      let hv = find(["cover", "contain", "fill", "inherit", "initial", "none", "revert", "scale-down", "unset"], ops.objectFit);
      if (hv) {
        $bgMatte.css({ "object-fit": ops.objectFit });
      }
    }
    $("body").append($bgMatte);
  }
}

export default createBackground;
