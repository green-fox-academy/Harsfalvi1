'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws a single line
// Parameters: the x and y coordinates of the line's starting point
// The function shall draw a line from that point to thCounter of the canvas
// Fill the canvas with lines from the edges (every 20 px) to thCounter


let startX: number = 0; 
let startY: number = 0;
function drawLine(x:number, y:number) {
    ctx.beginPath();
    ctx.moveTo(startX,startY);
    ctx.lineTo(canvas.width/2, canvas.height/2);
    ctx.stroke();
}
let lineDistance = 20;

for (let lineCounter = 0; lineCounter < canvas.width; lineCounter+=lineDistance) {
    drawLine (startX,startY);
    startX += lineDistance;   
}

for (let lineCounter = 0; lineCounter < canvas.height; lineCounter+=lineDistance) {
    drawLine (startX,startY);
    startY += lineDistance;   
}

for (let lineCounter = 0; lineCounter < canvas.width; lineCounter+=lineDistance) {
    drawLine (startX,startY);
    startX -= lineDistance;   
}

for (let lineCounter = 0; lineCounter < canvas.height; lineCounter+=lineDistance) {
    drawLine (startX,startY);
    startY -= lineDistance;   
}