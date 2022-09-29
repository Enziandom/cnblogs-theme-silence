import "./style/index.scss";
import { setMode, setTheme } from "../../utils/theme-helper";

function createToolbar() {
  const $bluepoint = $(`
    <div id="enzia-tools">
      <div class="canbe-fade">
        <span class="menu tool-item" title="Mini菜单"><i class="fa fa-bars"></i></span>
        <span class="folding tool-item" title="收起侧边"><i class="fa fa-exchange"></i></span>
        <span class="up tool-item" title="返回顶部"><i class="fa fa-paper-plane"></i></span>
        <span class="mode tool-item" title="切换模式"><i class="fa fa-adjust"></i></span>
        <span class="skin tool-item" title="主题设置"><i class="fa fa-cog"></i></span>
      </div>
      <span class="chevron tool-item" title="收起工具"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>
      <div id="enzia-skin-popup">
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
  `);

  $("#home").append($bluepoint);

  const $up = $(".up.tool-item");
  $up.on("click", e => {
    $("#mainContent").animate({ scrollTop: 0 }, 750, "linear");
  });

  const $menu = $(".menu.tool-item");
  $menu.on("click", e => {
    $("#enzia-mobile-menu-mask").fadeIn();
    $("#enzia-mobile-menu").fadeIn();
  });

  let isFolded = false;
  const $folding = $(".folding.tool-item");
  $folding.on("click", e => {
    if (isFolded) {
      $("#sideBarMain").css({ display: "block" });
      $("#mainContent").css({
        left: "27vw",
        width: "46vw"
      });
    } else {
      $("#sideBarMain").css({ display: "none" });
      $("#mainContent").css({
        left: "12.5vw",
        width: "60.5vw"
      });
    }
    isFolded = !isFolded;
  });

  const $mode = $(".mode");
  $($mode).on("click", e => {
    e.stopPropagation();
    setMode();
  });

  const $skin = $(".skin");
  $($skin).on("click", e => {
    e.stopPropagation();
    $($enziaSkinPopup).slideToggle();
  });

  let isHide = false;

  const $chevron = $(".chevron");
  const $canbeFade = $(".canbe-fade");
  $($chevron).on("click", e => {
    e.stopPropagation();
    $($canbeFade).fadeToggle();

    if (isHide) {
      $($chevron).css({
        transform: "rotate(0deg)"
      });
    } else {
      $($chevron).css({
        transform: "rotate(180deg)"
      });
    }
    isHide = !isHide;
  });

  const $enziaSkinPopup = $("#enzia-skin-popup");
  $($enziaSkinPopup).on("click", e => {
    e.stopPropagation();
    if (e.target.nodeName === "BUTTON") {
      setTheme(e.target.dataset.theme);
    }
    $($enziaSkinPopup).slideToggle();
  });
}

export default createToolbar;
