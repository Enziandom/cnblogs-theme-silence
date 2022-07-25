import "./index.less";
import { boolToStr, strToBool } from "../../utils/type-helper";

function createWidgetAsDropdown(mount, title, content) {
  let blueprint = $(`
    <div class="widget-dropdown">
      <h3 class="catListTitle">
        <div class="title">${ title }</div>
        <svg data-is-fold="false" class="foldable-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <path fill="var(--text-color)" stroke="var(--text-color)" d="M818.393225 300.939003c12.824073-14.09502 34.658358-15.126512 48.752354-2.303462 14.09502 12.843516 15.126512 34.678824 2.302439 48.752354l-332.676845 364.835266c-12.844539 14.114462-34.659381 15.127536-48.753377 2.302439-0.815575-0.733711-1.588171-1.486864-2.302439-2.302439l-0.080841-0.078795-0.13917-0.13917L153.018046 347.388918c-12.824073-14.074553-11.791557-35.909861 2.302439-48.752354 14.09502-12.824073 35.930327-11.792581 48.753377 2.303462l307.168891 336.845795 307.149449-336.845795L818.393225 300.939003 818.393225 300.939003z">
        </svg>
      </h3>
      <div class="widget-body">${ content }</div>
    </div>
  `);
  $(mount).append(blueprint);
  $(blueprint).find(".foldable-icon").on("click", (e) => {
    e.stopPropagation();
    e.preventDefault();
    let $target = $(e.currentTarget);
    let isFold = strToBool($target.data("isFold"));
    if ( !isFold ) {
      changeCss(blueprint, "block", 0, 1);
    } else {
      changeCss(blueprint, "none", 180, -1);
    }
    $target.data("isFold", boolToStr(!isFold));
  });
}

function changeCss(target, display, rotate, scaleX) {
  target.find(".widget-body").css("display", display);
  target.find(".catListTitle svg").css({
    "transform": `rotate(${ rotate }deg) scaleX(${ scaleX })`,
    "transition-duration": "0.3s"
  });
}

export default createWidgetAsDropdown;