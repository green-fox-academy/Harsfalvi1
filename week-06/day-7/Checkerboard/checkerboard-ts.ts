'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern

const squareSize: number = canvas.height / 8

for (let rows = 0; rows < canvas.width / squareSize; rows++) {
    for (let colums = 0; colums < canvas.height / squareSize; colums++) {
        if (colums % 2 === rows % 2) {
            ctx.fillStyle = "black"
            ctx.fillRect(rows * squareSize, colums * squareSize, squareSize, squareSize);
        } else {
            ctx.fillStyle = "white"
            ctx.fillRect(rows * squareSize, colums * squareSize, squareSize, squareSize);

        }
    }
}

