import "./index.scss";
import { setCss } from "../../utils/css-helper";
import options from "../../config/options";

function randomUint(max) {
  return Math.floor(Math.random() * max);
}

function find(arr, _el) {
  return !!arr.find(el => el === _el);
}

function createBackground() {
  let ops = options.backgroundOps;

  if (ops && ops.urls) {
    if (ops.urls.length <= 0) return;
    let random = randomUint(ops.urls.length);
    let quaSynx = ["cover", "contain", "fill", "inherit", "initial", "none", "revert", "scale-down", "unset"];
    let isQua = find(quaSynx, ops.objectFit);
    let imgFit = "cover";
    if (isQua) imgFit = ops.objectFit;
    let $img = $(`
      <div class="matte-container" style="--bg-blur: ${ops.blur}px; opacity: ${ops.bgOpacity}">
        <img class="matte-img" src="${ops.urls[random]}" style="object-fit: ${imgFit}" />
      </div>
    `);
    setCss([{ "#home": { opacity: ops.mainOpacity } }]);
    $("body").append($img);
  }
}

export default createBackground;
