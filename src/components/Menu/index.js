import "./index.scss";
import options from "../../config/options";
import createDropdown from "../../widgets/Dropdown/index";
import createStatus from "../../widgets/Status/index";
import createMyLinks from "../../widgets/MyLinks";
import createNiceBooks from "../../widgets/NiceBooks";

function createMenu() {
  let $profile = $("#profile_block").find("a").clone(true);
  let $catListTag = $(".catListTag").find("ul").clone(true);
  let $topcisCategory = $("#sidebar_postcategory").find("ul").clone(true);
  let $calender = $("#blogCalendar").clone(true);
  let profiles = [];

  for (let index = 0; index < $profile.length; index++) {
    profiles.push($.trim($profile[index].innerText));
  }

  let $bluepoint = $(`
    <div id="enzia-mobile-menu-mask" style="display: none;"></div>
    <div id="enzia-mobile-menu" style="display: none; width: ${options.menu.width}px;">
      <div class="wrapper">
        <div class="signature">${options.menu.signature}</div>
        <div class="profile">
          <div class="avatar-box">
            <img class="avatar" src="${options.avatar}" alt="" />
          </div>
          <div class="blog-info">
            <div class="blog-name">昵称：${profiles[0]}</div>
            <div class="blog-age">园龄：${profiles[1]}</div>
            <div class="blog-ff">
              <div class="blog-fans">粉丝：${profiles[2]}</div>
              <div class="blog-follows">关注：${profiles[3]}</div>
            </div>
          </div>
        </div>
        ${renderRepositories()}
        <div class="datetime"></div>
        <div class="tags"></div>
        <div class="topics"></div>
        <div class="links"></div>
        <div class="books"></div>
        <div class="clear"></div>
      </div>
    </div>
  `);

  let $bottombtns = $(`
    <div class="bottom-btns">
      <div><a href="https://www.cnblogs.com/${profiles[0]}">首页</a></div>
      <div><a href="https://i.cnblogs.com/" target="_blank">管理</a></div>
      <div><a href="https://i.cnblogs.com/EditPosts.aspx?opt=1" target="_blank">新随笔</a></div>
      <div><a href="https://www.cnblogs.com/" target="_blank">博客园</a></div>
      ${renderBottomBtns()}
    </div>
  `);

  $bluepoint.find(".clear").after($bottombtns);
  $("#home").append($bluepoint);

  $bluepoint.find(".datetime").append($calender);
  createDropdown(e => $bluepoint.find(".tags").append(e), "我的标签", $catListTag, true, "margin: 15px 0 10px 0; font-size: 16px;");
  createDropdown(e => $bluepoint.find(".topics").append(e), "我的随笔", $topcisCategory, true, "margin: 10px 0; font-size: 16px;");
  createDropdown(e => $bluepoint.find(".links").append(e), "常用链接", createMyLinks(options.myLinks.data), options.myLinks.iscollapse, "margin: 10px 0; font-size: 16px;");
  createDropdown(e => $bluepoint.find(".books").append(e), "推荐书籍", createNiceBooks(options.niceBooks.data), options.niceBooks.iscollapse, "margin: 10px 0; font-size: 16px;");
  createStatus($bluepoint.find(".avatar-box"), false);

  $(".mobile-navs-menu").on("click", () => {
    $("#enzia-mobile-menu-mask").fadeIn();
    $("#enzia-mobile-menu").fadeIn();
  });

  $("#enzia-mobile-menu-mask").on("click", () => {
    $("#enzia-mobile-menu-mask").fadeOut();
    $("#enzia-mobile-menu").fadeOut();
  });

  let scrollLeft = 0;

  $bottombtns.on("mousewheel", e => {
    let scrollWidth = e.delegateTarget.scrollWidth - e.delegateTarget.offsetWidth;
    if (e.originalEvent.deltaY < 0) {
      if (scrollLeft > 0) {
        scrollLeft -= 20;
        $(e.delegateTarget).animate({ scrollLeft: scrollLeft }, 100, "linear");
      }
    } else {
      if (scrollLeft <= scrollWidth) {
        scrollLeft += 20;
        $(e.delegateTarget).animate({ scrollLeft: scrollLeft }, 100, "linear");
      }
    }
  });
}

function upperStr(str, uppers, alias) {
  let res = "";
  let strs = [];
  if (alias) {
    strs = alias.split("");
  } else {
    strs = str.split("");
  }
  for (let i in uppers) {
    strs[uppers[i]] = strs[uppers[i]].toUpperCase();
  }
  return res.concat(...strs);
}

function renderRepository(url, icon, uppers, alias) {
  let bluepoint = ``;
  if (url) {
    bluepoint = `
      <div class="${icon}">
        <span><i class="fa fa-${icon}" aria-hidden="true"></i></span>
        <span><a href="${url}" target="_blank">${upperStr(icon, uppers, alias)}</a></span>
      </div>
    `;
  }
  return bluepoint;
}

function renderRepositories() {
  if (options.gitee || options.github || options.gitlab) {
    return `
      <div class="repositories">
        ${renderRepository(options.github, "github", [0, 3])}
        ${renderRepository(options.gitlab, "gitlab", [0, 3])}
        ${renderRepository(options.gitee, "git", [0], "gitee")}
      </div>
    `;
  } else {
    return ``;
  }
}

function renderBottomBtns() {
  let $reulst = ``;
  let btns = options.menu.bottomBtns;
  if (btns && btns.length > 0) {
    for (let i = 0; i < btns.length; i++) {
      $reulst += `<div><a href="${btns[i].url}" target="_blank">${btns[i].name}</a></div>`;
    }
    return $reulst;
  } else {
    return ``;
  }
}

export default createMenu;
