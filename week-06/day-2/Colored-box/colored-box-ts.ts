'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(50, 200);
ctx.stroke();

ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(50, 200);
ctx.lineTo(200, 200);
ctx.stroke();

ctx.strokeStyle = 'blue';
ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(200, 50);
ctx.stroke();

ctx.strokeStyle = 'magenta';
ctx.beginPath();
ctx.moveTo(200, 50);
ctx.lineTo(50, 50);
ctx.stroke();