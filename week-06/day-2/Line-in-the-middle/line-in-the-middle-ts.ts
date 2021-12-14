'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a red horizontal line to the center of the canvas
// draw a green vertical line to the center of the canvas

let canvasWidth: number = canvas.width;
let canvasHeight: number = canvas.height;

ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(canvasWidth-canvasWidth, canvasHeight/2);
ctx.lineTo(canvasWidth/2, canvasHeight/2);
ctx.stroke();

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(canvasWidth/2, canvasHeight);
ctx.lineTo(canvasWidth/2, canvasHeight/2);
ctx.stroke();