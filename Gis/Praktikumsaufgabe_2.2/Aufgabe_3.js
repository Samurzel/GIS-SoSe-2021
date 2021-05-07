"use strict";
let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
let r1 = { x1: 10, y1: 10, x2: 20, y2: 20 };
//c)
function createRect() {
    let canvas = document.getElementById("myCanvas");
    let context = canvas.getContext("2d");
    context.strokeRect(75, 340, 150, 110);
    context.fillStyle = "black";
    context.fill();
    context.stroke();
    context.stroke();
}
createRect();
//# sourceMappingURL=Aufgabe_3.js.map