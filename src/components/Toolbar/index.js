import "./index.less";
import { getMode, getTheme, setMode, setTheme } from "../../utils/theme-helper";

// 创建工具按钮模板
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
  // 向页面中添加工具按钮节点
  $("body").append(esaToolBar);
  let htmlDom = $("html");
  // 设置页面的日夜模式
  $(htmlDom).attr("mode", getMode());
  // 设置页面主题颜色
  $(htmlDom).attr("theme", getTheme());
  // 获取工具按钮中的 DOM 节点
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

  // 点击向上按钮，回到页面最顶端
  $(upDom).on("click", e => {
    e.stopPropagation();
    $("html, body").animate({ scrollTop: 0 }, 450);
  });

  // 点击日夜模式按钮切换模式
  $(modeDom).on("click", e => {
    e.stopPropagation();
    setMode();
  });

  // 点击主题颜色按钮切换主题颜色
  $(skinDom).on("click", e => {
    e.stopPropagation();
    $(skinOptions).slideToggle();
  });

  // 选择主题颜色
  $(skinOptions).on("click", e => {
    e.stopPropagation();
    if (e.target.nodeName === "BUTTON") {
      setTheme(e.target.dataset.theme);
    }
  });

  $(barsDom).trigger("click");
}

export default createToolbar;
