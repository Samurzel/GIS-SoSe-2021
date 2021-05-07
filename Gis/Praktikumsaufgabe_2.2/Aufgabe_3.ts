let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("myCanvas");
let context: CanvasRenderingContext2D = canvas.getContext("2d");

//b)

interface Rectangle {
    x1: number;
    y1: number;
    x2: number;
    y2: number; 
}

let r1: Rectangle = {x1: 10, y1: 10, x2: 20, y2: 20};

//c)

function createRect(): void {
let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("myCanvas");
let context: CanvasRenderingContext2D = canvas.getContext("2d");

context.strokeRect(75, 340, 150, 110);
context.fillStyle = "black";
context.fill();
context.stroke();


context.stroke();
}
createRect();