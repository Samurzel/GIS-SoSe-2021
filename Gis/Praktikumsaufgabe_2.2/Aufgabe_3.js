"use strict";
var Aufgabe_2_2_3;
(function (Aufgabe_2_2_3) {
    //a)
    let canvas = document.getElementById("myCanvas");
    let context = canvas.getContext("2d");
    context.lineWidth = 7;
    //wiese
    function drawWiese() {
        context.fillStyle = "green";
        context.beginPath();
        context.rect(0, 305, 760, 305);
        context.fill();
        context.stroke();
    }
    //Berge
    function drawBerge() {
        context.beginPath();
        context.fillStyle = "#A4A4A4";
        context.moveTo(0, 300);
        context.lineTo(150, 80);
        context.lineTo(300, 295);
        context.lineTo(375, 150);
        context.lineTo(450, 295);
        context.lineTo(600, 80);
        context.lineTo(750, 300);
        context.closePath();
        context.fill();
        context.stroke();
    }
    //wolke
    function drawWolke() {
        context.fillStyle = "#white";
        context.beginPath();
        context.moveTo(170, 80);
        context.bezierCurveTo(130, 100, 130, 150, 230, 150);
        context.bezierCurveTo(250, 180, 320, 180, 340, 150);
        context.bezierCurveTo(420, 150, 420, 120, 390, 100);
        context.bezierCurveTo(430, 40, 370, 30, 340, 50);
        context.bezierCurveTo(320, 5, 250, 20, 250, 50);
        context.bezierCurveTo(200, 5, 150, 20, 170, 80);
        context.closePath();
        context.lineWidth = 5;
        context.fill();
        context.stroke();
    }
    //haus
    function drawHaus() {
        context.strokeRect(75, 340, 150, 110);
        context.fillStyle = "black";
        context.fill();
        context.stroke();
        context.fillRect(130, 390, 40, 60);
        context.fillStyle = "white";
        context.fill();
        context.stroke();
        context.beginPath();
        context.moveTo(50, 340);
        context.lineTo(150, 260);
        context.lineTo(250, 340);
        context.fillStyle = "red";
        context.fill();
        context.closePath();
        context.stroke();
    }
    createRect();
    drawWiese();
    drawBerge();
    drawWolke();
    drawHaus();
    let r1 = { x1: 10, y1: 10, x2: 20, y2: 20, strokecolor: "red" };
    console.log(r1);
    function getRandom(_min, _max) {
        return Math.floor(Math.random() * (_max - _min) + _min);
    }
    //c)
    function createRect() {
        let w = getRandom(50, 600);
        let h = getRandom(50, 600);
        let x = getRandom(0, 150);
        let y = getRandom(0, 150);
        return {
            x1: w,
            y1: h,
            x2: x,
            y2: y,
            strokecolor: context.fillStyle = "black"
        };
    }
    //d)
    function drawRect(_r) {
        context.fillStyle = "black";
        context.beginPath();
        context.rect(_r.x1, _r.y1, _r.x2, _r.y2);
        context.fill();
    }
    //e)
    let rectCreation = [];
    for (let i = 0; i < 4; i++) {
        rectCreation.push(createRect());
    }
    for (let i = 0; i < rectCreation.length; i++) {
        drawRect(rectCreation[i]);
    }
})(Aufgabe_2_2_3 || (Aufgabe_2_2_3 = {}));
//# sourceMappingURL=Aufgabe_3.js.map