'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws one square
// Parameters: the x and y coordinates of the square's top left corner
// The function shall draw a 50x50 square from that point
// Draw 3 squares with that function
// Avoid code duplication!

let positionX: number = 0;
let positionY: number = 0;
let size: number = 50;
let numberOfSquare: number = 3

function drawSquare(x: number, y:number) {
    ctx.fillRect(x,y,size,size);
    for (let squareCounter: number = 0; squareCounter < numberOfSquare; squareCounter++) {
        ctx.fillRect(x, y, size, size);
        x += size + 10;
    }
}
drawSquare(positionX,positionY);