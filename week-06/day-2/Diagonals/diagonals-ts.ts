'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line
// Use this function to draw the canvas' diagonals
// If the line starts from the upper-left corner it should be green, otherwise it should be red
// Make decision about the color in the function



function drawDiagonal(canvasWidth: number = canvas.width, canvasHeight: number = canvas.height) {
   

    if (canvasHeight-canvasHeight || canvasWidth) {
        ctx.strokeStyle = 'green';
        ctx.beginPath();
        ctx.moveTo(canvasWidth - canvasWidth, canvasHeight - canvasHeight);
        ctx.lineTo(canvasWidth, canvasHeight);
        ctx.stroke();
    } /*else {
        ctx.strokeStyle = 'red';
        ctx.beginPath();
        ctx.moveTo(canvasWidth - canvasWidth, canvasHeight);
        ctx.lineTo(canvasWidth, canvasHeight - canvasHeight);
        ctx.stroke(); az else-n belül nem rajzolja meg, csak kívül
    }*/
    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(canvasWidth - canvasWidth, canvasHeight);
    ctx.lineTo(canvasWidth, canvasHeight - canvasHeight);
    ctx.stroke(); 
}

drawDiagonal();