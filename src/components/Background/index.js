import "./index.scss";
import { setCss } from "../../utils/css-helper";
import options from "../../config/options";

function randomUint(max) {
  return Math.floor(Math.random() * max);
}

function createBackground() {
  let ops = options.backgroundOps;

  if (ops && ops.urls.length > 0) {
    let random = randomUint(ops.urls.length);
    setCss([{ body: { "background-image": `url(${ops.urls[random]})`, "--bg-blur": `${ops.blur}px` } }, { "#home": { opacity: ops.mainOpacity } }]);
  }
}

export default createBackground;
