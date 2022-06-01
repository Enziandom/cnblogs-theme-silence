import "./index.less";
import options from "../../consts/options";
import { themeColors, getTheme } from "../../consts/tools";
import { boolToStr, strToBool } from "../../utils/type-helper";

let fillColor = "", strokeColor = "";

const icons = [
  {
    name: "unfold-icon",
    icon: `
      <svg class="icon unfold-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
        <path fill="var(--text-color)" stroke="var(--text-color)" d="M818.393225 300.939003c12.824073-14.09502 34.658358-15.126512 48.752354-2.303462 14.09502 12.843516 15.126512 34.678824 2.302439 48.752354l-332.676845 364.835266c-12.844539 14.114462-34.659381 15.127536-48.753377 2.302439-0.815575-0.733711-1.588171-1.486864-2.302439-2.302439l-0.080841-0.078795-0.13917-0.13917L153.018046 347.388918c-12.824073-14.074553-11.791557-35.909861 2.302439-48.752354 14.09502-12.824073 35.930327-11.792581 48.753377 2.303462l307.168891 336.845795 307.149449-336.845795L818.393225 300.939003 818.393225 300.939003z">
      </svg>
    `
  },
  {
    name: "fresh-icon",
    icon: `
      <svg class="icon fresh-icon" viewBox="0 0 1162 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
        <path fill="var(--text-color)" stroke="var(--text-color)" d="M1015.265248 720.230902h-8.677481a34.709923 34.709923 0 0 1-26.032442-52.064884 433.874038 433.874038 0 0 0-216.937019-538.003807 425.196557 425.196557 0 0 0-485.938922 86.774808 43.387404 43.387404 0 0 1-60.742365-60.742365A520.648845 520.648845 0 0 1 807.00571 52.064885 511.971364 511.971364 0 0 1 1058.652652 694.19846a43.387404 43.387404 0 0 1-43.387404 26.032442zM581.39121 1023.942729a538.003807 538.003807 0 0 1-225.614499-52.064885 520.648845 520.648845 0 0 1-260.324423-624.778614 43.387404 43.387404 0 0 1 60.742366-26.032442 43.387404 43.387404 0 0 1 26.032442 52.064884 433.874038 433.874038 0 0 0 216.937019 520.648845 425.196557 425.196557 0 0 0 485.938922-86.774807 43.387404 43.387404 0 1 1 60.742365 60.742365 485.938922 485.938922 0 0 1-364.454192 156.194654z"></path>
        <path fill="var(--text-color)" stroke="var(--text-color)" d="M199.582057 494.616403c-17.354962 0-26.032442 0-34.709923-17.354962l-34.709923-52.064884-60.742365 52.064884a43.387404 43.387404 0 0 1-60.742365-8.67748 43.387404 43.387404 0 0 1 8.677481-60.742366l95.452288-78.097326c8.677481-8.677481 26.032442-17.354962 34.709923-8.677481s26.032442 8.677481 26.032442 17.354961L234.29198 433.874038c17.354962 17.354962 8.677481 43.387404-17.354961 60.742365zM1015.265248 746.263345h-8.677481l-26.032442-26.032443-52.064885-95.452288c-17.354962-17.354962-8.677481-43.387404 17.354962-60.742365a60.742365 60.742365 0 0 1 60.742365 17.354961l26.032442 60.742366 60.742366-52.064885a52.064885 52.064885 0 0 1 60.742365 8.677481c8.677481 17.354962 8.677481 52.064885-8.677481 60.742365l-104.129769 78.097327z"></path>
      </svg>
    `
  }
];

function drawPolygon(j, x, y, sides, radius, coords, ctx) {
  ctx.beginPath();
  let averageAngle = Math.PI * 2 / sides;
  let increaseAngle = 0;
  let lengthX, lengthY, targetX, targetY;
  coords.push({ layer: j, coords: [] });
  for ( let i = 0; i < sides; i++ ) {
    lengthX = radius * Math.cos(increaseAngle);
    targetX = x + lengthX;
    lengthY = radius * Math.sin(increaseAngle);
    targetY = y - lengthY;
    ctx.lineTo(targetX, targetY);
    increaseAngle += averageAngle;
    coords[j].coords.push({ x: targetX, y: targetY });
  }
  ctx.closePath();
  ctx.stroke();
}

/**
 * 绘制多边形
 *
 * @param config 配置项
 * @param x 多边形最里层的圆心 x 轴
 * @param y 多边形最里层的圆心 y 轴
 * @param ctx canvas 上下文
 */
function drawRadarMap(config, x, y, ctx) {
  let coords = [];
  let radius = config.step;
  ctx.strokeStyle = config.lineColor;
  ctx.lineWidth = config.lineWidth;
  for ( let j = 0; j < config.layer; j++ ) {
    drawPolygon(j, x, y, config.sides, radius, coords, ctx);
    radius = radius + config.step;
  }
  drawStria(coords, x, y, config, ctx);
  drawDataArea(radius, coords, x, y, config, ctx);
}

/**
 * 连接里层以及外层之间所有多边形
 *
 * @param axis 所有多边形（层）的坐标轴
 * @param x 多边形最里层的圆心 x 轴
 * @param y 多边形最里层的圆心 y 轴
 * @param config 配置项
 * @param ctx canvas 上下文
 */
function drawStria(axis, x, y, config, ctx) {
  let coords = axis[axis.length - 1].coords;

  for ( let i = 0; i < config.sides; i++ ) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(coords[i].x, coords[i].y);
    ctx.closePath();
    ctx.stroke();
  }
}

/**
 * 绘制多边形每一面对应的数据，即数据覆盖区域
 *
 * @param radius 每一层多边形的半径
 * @param coords 所有多边形（层）的坐标轴
 * @param x 多边形最里层的圆心 x 轴
 * @param y 多边形最里层的圆心 y 轴
 * @param config 配置项
 * @param ctx canvas 上下文
 */
function drawDataArea(radius, coords, x, y, config, ctx) {
  let axis = [];
  let maxLayer = coords[coords.length - 1].coords;

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.font = `${ config.textSize }px Georgia`;

  for ( let i = 0; i < config.sides; i++ ) {
    ctx.fillStyle = config.textColor;
    if ( maxLayer[i].x <= x ) {
      ctx.textAlign = "right";
    } else {
      ctx.textAlign = "left";
    }
    ctx.fillText(config.data[i].title, maxLayer[i].x, maxLayer[i].y);
    let currLayer = config.data[i].star - 1;
    let _x, _y;
    if ( currLayer < 0 ) {
      _x = x;
      _y = y;
    } else {
      _x = coords[currLayer].coords[i].x;
      _y = coords[currLayer].coords[i].y;
    }
    if ( i === 0 ) {
      ctx.moveTo(_x, _y);
    } else {
      ctx.lineTo(_x, _y);
    }
    axis.push({ title: config.data[i].title, star: config.data[i].star, x: _x, y: _y });
  }

  ctx.closePath();
  ctx.lineWidth = 3;
  ctx.strokeStyle = strokeColor;
  ctx.stroke();
  ctx.globalAlpha = config.alpha;
  ctx.fillStyle = fillColor;
  ctx.fill();

  drawDataAreaTop(axis, ctx);
  drawFloatingPanel(axis);
}

/**
 * 绘制可移动的面板，显示详细信息
 *
 * @param axis 所有多边形（层）的坐标轴
 */
function drawFloatingPanel(axis) {
  let cnp = $("#radar-floating");
  let timeout = null;
  $("#radar-map").on({
    mousemove: function (e) {
      if ( timeout != null ) clearTimeout(timeout);
      timeout = setTimeout(() => {
        axis.forEach((v) => {
          if ( (v.x >= e.offsetX - 5 && v.x < e.offsetX + 5) && (v.y >= e.offsetY - 5 && v.y < e.offsetY + 5) ) {
            $(cnp).css({
              "display": "block", "left": `${ e.offsetX }px`, "top": `${ e.offsetY }px`
            });
            $(cnp).empty().append(`
              <div class="tech">技术栈：${ v.title }</div>
              <div class="star">掌握程度：${ v.star } 颗星</div>
            `);
          }
        });
      }, 50);
    },
    mouseleave: () => {
      $(cnp).css({ "display": "none" });
    }
  });
}

/**
 * 绘制数据覆盖区域峰值的点
 *
 * @param axis 所有多边形（层）的坐标轴
 * @param ctx canvas 上下文
 */
function drawDataAreaTop(axis, ctx) {
  ctx.strokeStyle = "white";

  for ( let i = 0; i < axis.length; i++ ) {
    ctx.beginPath();
    ctx.arc(axis[i].x, axis[i].y, 1, 0, Math.PI * 2);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "white";
    ctx.fill();
  }
}

function createRadarMapTemplate() {
  $("#right-sidebar > .sidebar-wrap > .sidebar-content").prepend(`
    <!-- 技能雷达图 -->
    <div class="personal-tech">
      <h3 class="catListTitle">
        <div class="cat-list-title-wrap">
          <div class="title">技能雷达</div>
          <div class="icon-wrap" data-is-fold="false">
            ${ icons[0].icon }
          </div>
        </div>
      </h3>
      <div class="tech-radar">
        <div class="radar-wrap-loading">
          <div class="loading-wrap">
            ${ icons[1].icon }
            <div>loading...</div>
          </div>
        </div>
        <div class="radar-wrap">
          <canvas data-is-loaded="false" id="radar-map" width="200" height="200"></canvas>
          <div id="radar-floating"></div>
        </div>
      </div>
    </div>
  `);
}

function foldIconSwitcher(thisArg, display, rotate, scaleX) {
  $(".personal-tech > .tech-radar").css({
    "display": `${ display }`
  });
  $(thisArg).find("svg").css({
    "transform": `rotate(${ rotate }deg) scaleX(${ scaleX })`,
    "transition-duration": "0.3s"
  });
}

function radarMapSwitcher() {
  $(".personal-tech > .catListTitle > .cat-list-title-wrap > .icon-wrap")
    .on("click", function () {
      let isFold = strToBool($(this)[0].dataset.isFold);
      if ( isFold ) {
        foldIconSwitcher(this, "none", 0, 1);
      } else {
        foldIconSwitcher(this, "block", 180, -1);
        initRadarMap();
      }
      $(this)[0].dataset.isFold = boolToStr(!isFold);
    });
}

function initRadarMap() {
  let radarMapDom = $("#radar-map");
  let isLoaded = strToBool($(radarMapDom)[0].dataset.isLoaded);

  if ( !isLoaded ) {
    new Promise(function (resolve, reject) {
      let ctx = document.getElementById("radar-map").getContext("2d");
      setTimeout(() => {
        drawRadarMap(options.radarMap, 100, 100, ctx);
        resolve();
      }, Math.random() * 2 * 1000);
    }).then(() => {
      $(".tech-radar > .radar-wrap-loading").css({ "display": "none" });
    });
    $(radarMapDom)[0].dataset.isLoaded = boolToStr(!isLoaded);
  }
}

function buildRadarMap() {
  fillColor = themeColors[getTheme()].color;
  strokeColor = themeColors[getTheme()].color2;

  createRadarMapTemplate();
  radarMapSwitcher();
}

export default buildRadarMap;