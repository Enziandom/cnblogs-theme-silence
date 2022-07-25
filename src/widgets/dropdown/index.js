import "./index.less";
import { boolToStr, strToBool } from "../../utils/type-helper";

let collapseIcon = `<svg data-is-fold="true" class="collapse-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path fill="var(--text-color)" stroke="var(--text-color)" d="M1011.2 620.8 972.8 672 512 300.8 51.2 672 12.8 620.8 512 217.6Z"></path></svg>`;
let uncollapseIcon = `<svg data-is-fold="false" class="collapse-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path fill="var(--text-color)" stroke="var(--text-color)" d="M1011.2 307.2 972.8 256 512 627.2 51.2 256 12.8 307.2 512 710.4Z"></path></svg>`;

function createWidgetAsDropdown(mount, title, content, iscollapse) {
  let $blueprint = $(`
    <div class="widget-dropdown">
      <h3 class="catListTitle">
        <div class="title">${ title }</div>
        ${ iscollapse ? collapseIcon : uncollapseIcon }
      </h3>
      <div class="widget-body" style="display: ${ iscollapse ? "none" : "block" }">${ content }</div>
    </div>
  `);
  mount($blueprint);
  changeIcon($blueprint, iscollapse);
}

function changeIcon(target, iscollapse) {
  $(target).find(".collapse-icon").on("click", (e) => {
    e.stopPropagation();
    e.preventDefault();
    let iconIsFold = strToBool($(e.currentTarget).attr("data-is-fold"));
    iscollapse ? rotateIcon(target, iconIsFold, 180) : rotateIcon(target, iconIsFold, 0);
    $(e.currentTarget).attr("data-is-fold", boolToStr(!iconIsFold));
  });
}

function rotateIcon(target, iscollapse, start) {
  iscollapse ? changeCss(target, "block", start) : changeCss(target, "none", start - 180);
}

function changeCss(target, collapse, rotate) {
  target.find(".widget-body").css("display", collapse);
  target.find(".catListTitle svg").css({
    "transform": `rotate(${ rotate }deg)`,
    "transition-duration": "0.3s"
  });
}

export default createWidgetAsDropdown;