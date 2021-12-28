'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]

let position: number = 10;
let numberOfSquare: number = 6
let size: number = 10;


    for (let squareCounter: number = 0; squareCounter < numberOfSquare; squareCounter++) {
        ctx.fillStyle ="purple"
        ctx.fillRect(position, position, size, size);
        position += size
        size = size + 20
    }
            
        