import options from "../../../consts/options";

function buildRadarMap() {
    let canvas = document.getElementById("radar-map");
    let ctx = canvas.getContext("2d");

    drawPolygonPath(5, 20, 10, 150, 150, options.radarMap.data, options.radarMap.options, ctx);

    function drawPolygonPath(layer, step, sides, x, y, data, options, ctx) {
        let coordinates = [];
        let radius = step;
        ctx.strokeStyle = options.radar.lineColor;
        ctx.lineWidth = options.radar.lineWidth;
        for (let j = 0; j < layer; j++) {
            ctx.beginPath();
            let averageAngle = Math.PI * 2 / sides;
            let increaseAngle = 0;
            let lengthX, lengthY, targetX, targetY;
            coordinates.push({layer: j, coords: []});
            for (let i = 0; i < sides; i++) {
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
            radius = radius + step;
        }
        drawStria(sides, coordinates, x, y, options, ctx);
        drawData(sides, radius, coordinates, x, y, data, options, ctx);
    }

    function drawStria(surface, coordinates, originX, originY, options, ctx) {
        let length = coordinates.length;
        let coords = coordinates[length - 1].coords;
        for (let i = 0; i < surface; i++) {
            ctx.beginPath();
            ctx.moveTo(originX, originY);
            ctx.lineTo(coords[i].x, coords[i].y);
            ctx.closePath();
            ctx.stroke();
        }
    }

    function drawData(surface, radius, coordinates, originX, originY, data, options, ctx) {
        let decidedCoords = [];
        let length = coordinates.length;
        let lastLayer = coordinates[length - 1].coords;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.font = `${options.radar.textSize}px Georgia`;
        ctx.lineWidth = options.dataArea.lineWidth;
        for (let i = 0; i < surface; i++) {
            ctx.fillStyle = options.radar.textColor;
            if (lastLayer[i].x > originX) {
                ctx.fillText(data[i].title, lastLayer[i].x + 10, lastLayer[i].y);
            } else {
                ctx.fillText(data[i].title, lastLayer[i].x - 50, lastLayer[i].y);
            }
            let layer = data[i].star - 1;
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
        ctx.strokeStyle = options.dataArea.lineColor;
        ctx.stroke();
        ctx.fillStyle = options.dataArea.fillColor;
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
}

export default buildRadarMap;