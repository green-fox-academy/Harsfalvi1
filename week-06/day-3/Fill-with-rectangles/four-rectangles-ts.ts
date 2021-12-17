'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles
// Avoid code duplication!

function drawRectangle(x:number,y:number, sideA:number, sideB:number, color:string) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, sideA, sideB);
}
drawRectangle(10,10,100,100,"red");
drawRectangle(10,150,20,30,"pink");
drawRectangle(400,100,50,20,"blue");
drawRectangle(300,300,150,70,"green");
