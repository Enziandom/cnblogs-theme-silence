export class RadarMapCreator {

  constructor(ctx, x, y, config, options) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.config = config;
    this.options = options;
  }

  drawRadarMap() {
    let axis = [];
    let radius = this.config.polygonPerStep;
    this.ctx.lineWidth = this.config.lineWidth;
    this.ctx.strokeStyle = this.config.lineColor;
    for ( let j = 0; j < this.config.radarLayers; j++ ) {
      this.drawPolygon(radius, axis, j);
      radius = radius + this.config.polygonPerStep;
    }
    this.drawStria(axis);
    return this.drawDataArea(axis);
  }

  // 计算多边形点的x轴坐标
  calcPolygonX(radius, increaseAngle) {
    return this.x + radius * Math.cos(increaseAngle);
  }

  // 计算多边形点的y轴坐标
  calcPolygonY(radius, increaseAngle) {
    return this.y - radius * Math.sin(increaseAngle);
  }

  drawPolygon(radius, axis, currentPolygonLayer) {
    let averageAngle = Math.PI * 2 / this.config.totalSides;
    let increaseAngle = 0;
    let targetX, targetY;

    this.ctx.beginPath();
    axis.push({ layer: currentPolygonLayer, coords: [] });
    for ( let i = 0; i < this.config.totalSides; i++ ) {
      targetX = this.calcPolygonX(radius, increaseAngle);
      targetY = this.calcPolygonY(radius, increaseAngle);
      this.ctx.lineTo(targetX, targetY);
      increaseAngle += averageAngle;
      axis[currentPolygonLayer].coords.push({ x: targetX, y: targetY });
    }
    this.ctx.closePath();
    this.ctx.stroke();
  }

  /**
   * 连接里层以及外层之间所有多边形
   *
   * @param axis 所有多边形（层）的坐标轴
   */
  drawStria(axis) {
    let coords = axis[axis.length - 1].coords;
    for ( let i = 0; i < this.config.totalSides; i++ ) {
      this.ctx.beginPath();
      this.ctx.moveTo(this.x, this.y);
      this.ctx.lineTo(coords[i].x, coords[i].y);
      this.ctx.closePath();
      this.ctx.stroke();
      this.drawPointText(coords, i);
    }
  }

  /**
   * 绘制多边形做外层点的文本
   *
   * @param axis 所有多边形的点坐标
   * @param currentPoint 当前多边形的点的位置
   */
  drawPointText(axis, currentPoint) {
    this.ctx.font = `12px Georgia`;
    if ( axis[currentPoint].x <= this.x ) {
      this.ctx.textAlign = "right";
    } else {
      this.ctx.textAlign = "left";
    }
    this.ctx.fillStyle = this.config.textColor;
    this.ctx.fillText(this.config.data[currentPoint].title, axis[currentPoint].x, axis[currentPoint].y);
  }

  /**
   * 绘制数据区域的点，是一个样式，白色的点，突出数据区的点
   *
   * @param axis 所有多边形的点坐标
   */
  drawDataAreaPoint(axis) {
    for ( let i = 0; i < axis.length; i++ ) {
      this.ctx.beginPath();
      this.ctx.arc(axis[i].x, axis[i].y, 2, 0, Math.PI * 2);
      this.ctx.closePath();
      this.ctx.strokeStyle = "white";
      this.ctx.stroke();
      this.ctx.fillStyle = "white";
      this.ctx.fill();
    }
  }

  /**
   * 计算数据区域的点的 x 坐标
   *
   * @param areaTopLayer 数据区域的点的所在层数
   * @param axis 所有多边形的点坐标
   * @param currentPoint 当前循环到的多边形的一个点坐标
   * @returns {*} 返回 x 坐标
   */
  calcDataAreaTopX(areaTopLayer, axis, currentPoint) {
    if ( areaTopLayer < 0 ) {
      return this.x;
    } else {
      return axis[areaTopLayer].coords[currentPoint].x;
    }
  }

  /**
   * 计算数据区域的点的 y 坐标
   *
   * @param areaTopLayer 数据区域的点的所在层数
   * @param axis 所有多边形的点坐标
   * @param currentPoint 当前循环到的多边形的一个点坐标
   * @returns {*} 返回 y 坐标
   */
  calcDataAreaTopY(areaTopLayer, axis, currentPoint) {
    if ( areaTopLayer < 0 ) {
      return this.y;
    } else {
      return axis[areaTopLayer].coords[currentPoint].y;
    }
  }

  /**
   * 确定数据区域顶点，圈画数据区域以及填充数据区域的颜色
   *
   * @param axis 所有多边形的点坐标
   * @param currentPoint 当前循环到的多边形的一个点坐标
   * @returns {{x: (*), y: (*)}} 返回当前多边形的点坐标中对应的直线上，数据区域的值
   */
  drawDataAreaTop(axis, currentPoint) {
    let x = this.calcDataAreaTopX(this.config.data[currentPoint].star - 1, axis, currentPoint);
    let y = this.calcDataAreaTopY(this.config.data[currentPoint].star - 1, axis, currentPoint);
    if ( currentPoint === 0 ) {
      this.ctx.moveTo(x, y);
    } else {
      this.ctx.lineTo(x, y);
    }
    return { x: x, y: y };
  }

  /**
   * 绘制数据区域
   *
   * @param axis 所有多边形的点坐标
   */
  drawDataArea(axis) {
    let areaTopAxis = []; // 数据区域的所有点坐标
    this.ctx.beginPath();
    for ( let i = 0; i < this.config.totalSides; i++ ) {
      let { x, y } = this.drawDataAreaTop(axis, i);
      areaTopAxis.push({ title: this.config.data[i].title, star: this.config.data[i].star, x: x, y: y });
    }
    this.ctx.closePath();
    this.ctx.lineWidth = 4;
    this.ctx.globalAlpha = this.config.alpha;
    this.ctx.strokeStyle = this.options.strokeColor;
    this.ctx.stroke();
    this.ctx.fillStyle = this.options.fillColor;
    this.ctx.fill();
    this.drawDataAreaPoint(areaTopAxis);
    return areaTopAxis;
  }

  /**
   * 绘制可移动的面板，显示详细信息
   *
   * @param axis 所有多边形（层）的坐标轴
   */
  drawFloatingPanel(axis) {
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
}