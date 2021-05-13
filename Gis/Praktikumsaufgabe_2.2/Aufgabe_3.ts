namespace Aufgabe_2_2_3 {
let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myCanvas");
let context: CanvasRenderingContext2D = canvas.getContext("2d");


context.lineWidth = 7;

//wiese
function drawWiese(): void {
    context.fillStyle = "green";
    context.beginPath();
    context.rect(0, 305, 760, 305);
    context.fill();
    context.stroke();
}

//Berge
function drawBerge(): void {
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
function drawWolke(): void {
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
function drawHaus(): void {
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


//b)

interface Rectangle {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    strokecolor: string;
}

let r1: Rectangle = { x1: 10, y1: 10, x2: 20, y2: 20, strokecolor: "red", fillcolor: "yellow" };
console.log(r1);

/*

function randomX(): number {
    let a: number = 750;
    let i: number = Math.floor(Math.random() * a);

    let j: number = Math.floor(Math.random() * a + i);
    console.log(i);
    console.log(j);
    return i;
}



function randomY(): void {
    let b: number = 250;
    let i: number = Math.floor(Math.random() * b);

    let j: number = Math.floor(Math.random() * b + i);
    console.log(i);
    console.log(j);
}

function createRect(): void {
    context.fillStyle = "black";
    randomX();
    randomY();
    context.strokeRect(10, 10, 20, 30);
    context.fill();
    context.stroke();
}
*/

//c) & d)
function getRandom(_min: number, _max: number): number {
    return Math.floor(Math.random() * (_max - _min) + _min);
}
function createRect(): Rectangle {
    context.strokeRect(Math.random() * 750, Math.random() * 250, Math.random() * 750, Math.random() * 250);
    context.fillStyle = "black";
    context.fill();
    context.stroke();
    return {
        x1: w,
        y1: h,
        x2: x,
        y2: y,
        strokecolor: context.fillStyle = "black",
    };
}
}