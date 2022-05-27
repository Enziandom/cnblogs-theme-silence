import "./less/index.less";
import "./less/index.pc.less";
import "./less/index.pmd.less";
import options from "../../consts/options";
import { isMobile } from "../../utils/mobile-identifier";
import { boolToStr, strToBool } from "../../utils/type-transfer";

/**
 * 创建自定义导航栏下拥有子导航的模板
 *
 * @param childList 自定义导航栏的子节点
 * @returns {string[]}
 */
function createNavbarChildrenTemplate(childList) {
  return childList.chilren.map((_item) => {
    _item.target = _item.target || "_self";
    return `
      <div>
        <a class="menu" target="${ _item.target }" href="${ _item.url }">${ _item.title }</a>
      </div>
    `;
  });
}

/**
 * 创建自定义导航栏模板
 *
 * @param el 导航栏的 dom 节点
 * @param listData 自定义导航栏数据
 */
function createNavbarTemplate(el, listData) {
  listData.reverse().forEach((item) => {
    item.target = item.target || "_self";
    if ( item.chilren && item.chilren.length ) {
      el.find("li").eq(1).after(`
        <li class="shira-has-subnavs" data-is-fold="false">
          <a class="menu" href="javascript: void(0);">
            ${ item.title }
            <svg class="arrow" width="9" height="9" viewBox="0 0 13 7" xml:space="preserve" fill="none" stroke="var(--text-color)"><path d="M1,1l6.2,6L13,1"></path></svg>
          </a>
          <div class="shira-subnavs"> 
            <svg class="caret" width="12" height="12" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="var(--text-color)" stroke="var(--text-color)"><path d="M512 227.555556L1024 796.444444 0 796.444444z"></path></svg>
            <div>${ createNavbarChildrenTemplate(item).join("") }</div>
          </div>
        </li>
      `);
    } else {
      el.find("li").eq(1).after(`
        <li>
          <a class="menu" target="${ item.target }" href="${ item.url }">
            ${ item.title }
          </a>
        </li>
      `);
    }
  });
}

/**
 * 开启子导航栏
 *
 * @param thisArg 子导航栏节点的 this 对象
 */
function showSubnavas(thisArg) {
  $(thisArg).find(".arrow").css({
    "transform": "rotate(180deg) scaleX(-1)",
    "transition-duration": "0.3s"
  });
  $(thisArg).find(".shira-subnavs").fadeIn("fast");
}

/**
 * 关闭子导航栏
 *
 * @param thisArg 子导航栏节点的 this 对象
 */
function closeSubnavas(thisArg) {
  $(thisArg).find(".arrow").css({
    "transform": "rotate(0deg) scaleX(1)",
    "transition-duration": "0.3s"
  });
  $(thisArg).find(".shira-subnavs").hide();
}

/**
 * 当设备是移动设备时，需要点击才可以显示子导航栏项
 *
 * @param el 子导航栏的 dom 节点
 */
function onPmdDevice(el) {
  $(el).on("click", function (e) {
    e.preventDefault();
    let isFold = strToBool($(this)[0].dataset.isFold);
    if ( !isFold ) {
      showSubnavas(this);
    } else {
      closeSubnavas(this);
    }
    $(this)[0].dataset.isFold = boolToStr(!isFold);
  });
}

/**
 * 当设备是 PC 设备时，需要点击才可以显示子导航栏项
 *
 * @param el 子导航栏的 dom 节点
 */
function onPcDevice(el) {
  $(el).hover(function (e) {
    e.preventDefault();
    showSubnavas(this);
  }, function (e) {
    e.preventDefault();
    closeSubnavas(this);
  });
}

/**
 * 创建自定义导航栏，添加自定义导航栏的模板到导航栏下
 * @param el 导航栏 dom 节点
 */
function createCustomNavbar(el) {
  const listData = options.customNavbarItemList;

  if ( listData && listData.length ) {
    createNavbarTemplate(el, listData);
    if ( isMobile() ) {
      onPmdDevice("li.shira-has-subnavs");
    } else {
      onPcDevice("li.shira-has-subnavs");
    }
  }
}

/**
 * 否早自定义头部到 #navList
 */
function buildCustomHeader() {
  const $navList = $("#navList");
  createCustomNavbar($navList);

  $.each($navList.children("li"), (_, nav) => {
    if ( !$(nav).children("a").length ) {
      $(nav).remove();
    }
  });

  $("#header").prepend(`<div class="shira-mobile-menu"><i class="fa fa-bars"></i></div>`);
  $(".shira-mobile-menu").on("click", () => {
    $("#navigator").fadeToggle();
  });

  if ( !options.showNavAdmin ) {
    $("#blog_nav_admin").parent().remove();
  }
}

export default buildCustomHeader;
