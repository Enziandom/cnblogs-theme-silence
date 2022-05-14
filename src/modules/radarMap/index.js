import options from "../../consts/options";
import {themeColors} from "../../consts/tools";
import './index.less';
import {getTheme} from "../../consts/tools";

let fillColor = '', strokeColor = '';

function buildRadarMap() {
    fillColor = themeColors[getTheme()].color;
    strokeColor = themeColors[getTheme()].color2;

    $("#sidebar_search").after(`
        <div id="radar-map-wrapper">
            <h3 class="catListTitle">技能雷达</h3>
            <div class="radar-map-canvas-wrapper">
                <canvas id="radar-map" width="200" height="200"></canvas>
            </div>
        </div>
       
    `);

    let canvas = document.getElementById("radar-map");
    let ctx = canvas.getContext("2d");

    drawPolygonPath(options.radarMap, 100, 100, ctx);
}

function drawPolygonPath(config, x, y, ctx) {
    let coordinates = [];
    let radius = config.options.radar.step;
    ctx.strokeStyle = config.options.radar.lineColor;
    ctx.lineWidth = config.options.radar.lineWidth;
    for (let j = 0; j < config.options.radar.layer; j++) {
        ctx.beginPath();
        let averageAngle = Math.PI * 2 / config.options.radar.sides;
        let increaseAngle = 0;
        let lengthX, lengthY, targetX, targetY;
        coordinates.push({layer: j, coords: []});
        for (let i = 0; i < config.options.radar.sides; i++) {
            lengthX = radius * Math.cos(increaseAngle);
            targetX = x + lengthX;
            lengthY = radius * Math.sin(increaseAngle);
            targetY = y - lengthY;
            ctx.lineTo(targetX, targetY);
            increaseAngle += averageAngle;
            coordinates[j].coords.push({x: targetX, y: targetY});
        }
        ctx.closePath();
        ctx.stroke();
        radius = radius + config.options.radar.step;
    }
    drawStria(coordinates, x, y, config, ctx);
    drawData(radius, coordinates, x, y, config, ctx);
}

function drawStria(coordinates, originX, originY, config, ctx) {
    let length = coordinates.length;
    let coords = coordinates[length - 1].coords;
    for (let i = 0; i < config.options.radar.sides; i++) {
        ctx.beginPath();
        ctx.moveTo(originX, originY);
        ctx.lineTo(coords[i].x, coords[i].y);
        ctx.closePath();
        ctx.stroke();
    }
}

function drawData(radius, coordinates, originX, originY, config, ctx) {
    let decidedCoords = [];
    let length = coordinates.length;
    let lastLayer = coordinates[length - 1].coords;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.font = `${config.options.radar.textSize}px Georgia`;
    for (let i = 0; i < config.options.radar.sides; i++) {
        ctx.fillStyle = config.options.radar.textColor;
        if (lastLayer[i].x <= originX) {
            ctx.textAlign = 'right'
        } else {
            ctx.textAlign = 'left'
        }
        ctx.fillText(config.data[i].title, lastLayer[i].x, lastLayer[i].y);
        let layer = config.data[i].star - 1;
        let x, y;
        if (layer < 0) {
            x = originX;
            y = originY;
        } else {
            x = coordinates[layer].coords[i].x;
            y = coordinates[layer].coords[i].y;
        }
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
        decidedCoords.push({x: x, y: y});
    }
    ctx.closePath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = strokeColor;
    ctx.stroke();
    ctx.globalAlpha = 0.85;
    ctx.fillStyle = fillColor;
    ctx.fill();
    drawPoint(decidedCoords, ctx);
}

function drawPoint(coordinates, ctx) {
    ctx.strokeStyle = 'white';
    for (let i = 0; i < coordinates.length; i++) {
        ctx.beginPath();
        ctx.arc(coordinates[i].x, coordinates[i].y, 1, 0, Math.PI * 2);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = 'white';
        ctx.fill();
    }
}

export default buildRadarMap;