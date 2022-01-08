'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line
// Use this function to draw the canvas' diagonals
// If the line starts from the upper-left corner it should be green, otherwise it should be red
// Make decision about the color in the function


let startX: number = 0;
let startY: number = 0;

function drawDiagonal(x: number, y: number) {
    if (x === y) {
        ctx.strokeStyle = 'green';
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(canvas.width, canvas.height);
        ctx.stroke();
    } else {
        console.log(x,y)
        ctx.strokeStyle = 'red';
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(0, canvas.height);
        ctx.stroke();
    }
}

drawDiagonal(startX, startY);
drawDiagonal(canvas.width, 0);