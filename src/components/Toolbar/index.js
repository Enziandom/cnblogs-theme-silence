import "./index.less";
import { getMode, getTheme, setMode, setTheme } from "../../utils/theme-helper";

const esaToolBar = `
<div class="esa-toolbar">
  <div class="bars"><i class="fa fa-ellipsis-h"></i></div>
  <span class="up" title="返回顶部"><i class="fa fa-chevron-up"></i></span>
  <span class="mode" title="切换模式"><i class="fa fa-adjust"></i></span>
  <span class="skin" title="主题设置"><i class="fa fa-cog"></i></span>
  <div id="esa-skin-popup">
    <div class="item">
      <div class="title">主题色彩</div>
        <div class="themes">
            <button data-theme="a" style="background: #2D8CF0;"></button>
            <button data-theme="b" style="background: #FA7298;"></button>
            <button data-theme="c" style="background: #42B983;"></button>
            <button data-theme="d" style="background: #607D8B;"></button>
            <button data-theme="e" style="background: #5E72E4;"></button>
            <button data-theme="f" style="background: #FF9700;"></button>
            <button data-theme="g" style="background: #FF5722;"></button>
            <button data-theme="h" style="background: #009688;"></button>
            <button data-theme="i" style="background: #673BB7;"></button>
            <button data-theme="j" style="background: #906f61;"></button>
        </div>
      </div>
    </div>
  </div>
</div>
`;

function createToolbar() {
  $("body").append(esaToolBar);
  let htmlDom = $("html");
  $(htmlDom).attr("mode", getMode());
  $(htmlDom).attr("theme", getTheme());
  let barsDom = $(".bars");
  let upDom = $(".up");
  let modeDom = $(".mode");
  let skinDom = $(".skin");
  let skinOptions = $("#esa-skin-popup");

  let isDisplayToolbar = true;
  $(barsDom).on("click", e => {
    e.stopPropagation();
    if (!isDisplayToolbar) {
      $(barsDom).addClass("bars-show");
      $(upDom).addClass("up-show");
      $(modeDom).addClass("mode-show");
      $(skinDom).addClass("skin-show");
    } else {
      $(barsDom).removeClass("bars-show");
      $(upDom).removeClass("up-show");
      $(modeDom).removeClass("mode-show");
      $(skinDom).removeClass("skin-show");
    }
    isDisplayToolbar = !isDisplayToolbar;
  });

  $(upDom).on("click", e => {
    e.stopPropagation();
    $("html, body").animate({ scrollTop: 0 }, 450);
  });

  $(modeDom).on("click", e => {
    e.stopPropagation();
    setMode();
  });

  $(skinDom).on("click", e => {
    e.stopPropagation();
    $(skinOptions).slideToggle();
  });

  $(skinOptions).on("click", e => {
    e.stopPropagation();
    if (e.target.nodeName === "BUTTON") {
      setTheme(e.target.dataset.theme);
    }
  });

  $(barsDom).trigger("click");
}

export default createToolbar;
