import "./index.less";
import options from "../../config/options";
import createDropdown from "../../widgets/Dropdown/index";
import createStatus from "../../widgets/Status/index";
import createMyLinks from "../RightSidebar/plugins/MyLinks";
import createNiceBooks from "../RightSidebar/plugins/NiceBooks";

function createMenu() {
  let $profile = $("#profile_block").find("a").clone(true);
  let $catListTag = $(".catListTag").find("ul").clone(true);
  let $topcisCategory = $("#sidebar_postcategory").find("ul").clone(true);
  let $calender = $("#blogCalendar").clone(true);
  let profileArr = [];

  for (let index = 0; index < $profile.length; index++) {
    profileArr.push($.trim($profile[index].innerText));
  }

  let bluepoint = $(`
      <div id="enzia-mobile-menu-mask" style="display: none;"></div>
      <div id="enzia-mobile-menu" style="display: none;">
        <div class="wrapper">
          <div class="signature">${options.menu.signature}</div>
          <div class="profile">
            <div class="avatar-box">
              <img class="avatar" src="${options.avatar}" alt="" />
            </div>
            <div class="blog-info">
              <div class="blog-name">昵称：${profileArr[0]}</div>
              <div class="blog-age">园龄：${profileArr[1]}</div>
              <div class="blog-ff">
                <div class="blog-fans">粉丝：${profileArr[2]}</div>
                <div class="blog-follows">关注：${profileArr[3]}</div>
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
          <div class="bottom-btns">
            <div><a href="https://www.cnblogs.com/${profileArr[0]}">首页</a></div>
            <div><a href="https://i.cnblogs.com/">管理</a></div>
            <div><a href="https://i.cnblogs.com/EditPosts.aspx?opt=1">新随笔</a></div>
            <div><a href="https://www.cnblogs.com/">博客园</a></div>
          </div>
        </div>
      </div>
    `);

  $("#home").append(bluepoint);

  bluepoint.find(".datetime").append($calender);
  createDropdown(e => bluepoint.find(".tags").append(e), "我的标签", $catListTag, true, "margin: 15px 0 10px 0; font-size: 16px;");
  createDropdown(e => bluepoint.find(".topics").append(e), "我的随笔", $topcisCategory, true, "margin: 10px 0; font-size: 16px;");
  createDropdown(e => bluepoint.find(".links").append(e), "常用链接", createMyLinks(options.myLinks.data), options.myLinks.iscollapse, "margin: 10px 0; font-size: 16px;");
  createDropdown(e => bluepoint.find(".books").append(e), "推荐书籍", createNiceBooks(options.niceBooks.data), options.niceBooks.iscollapse, "margin: 10px 0; font-size: 16px;");
  createStatus(bluepoint.find(".avatar-box"), false);

  $(".mobile-navs-menu").on("click", () => {
    $("#enzia-mobile-menu-mask").fadeIn();
    $("#enzia-mobile-menu").fadeIn();
  });

  $("#enzia-mobile-menu-mask").on("click", () => {
    $("#enzia-mobile-menu-mask").fadeOut();
    $("#enzia-mobile-menu").fadeOut();
  });
}

function renderGitHub() {
  let bluepoint = ``;
  if (options.github) {
    bluepoint = `
      <div class="github">
        <span><i class="fa fa-github" aria-hidden="true"></i></span>
        <span><a href="${options.github}">GitHub</a></span>
      </div>
    `;
  }
  return bluepoint;
}

function renderGitLab() {
  let bluepoint = ``;
  if (options.gitlab) {
    bluepoint = `
      <div class="gitlab">
        <span><i class="fa fa-gitlab" aria-hidden="true"></i></span>
        <span><a href="${options.gitlab}">GitHub</a></span>
      </div>
    `;
  }
  return bluepoint;
}

function renderGitee() {
  let bluepoint = ``;
  if (options.gitee) {
    bluepoint = `
      <div class="gitee">
        <span><i class="fa fa-git" aria-hidden="true"></i></span>
        <span><a href="${options.gitee}">GitHub</a></span>
      </div>
    `;
  }
  return bluepoint;
}

function renderRepositories() {
  if (options.gitee || options.github || options.gitlab) {
    return `
      <div class="repositories">
        ${renderGitHub()}
        ${renderGitLab()}
        ${renderGitee()}
      </div>
    `;
  } else {
    return ``;
  }
}

export default createMenu;
