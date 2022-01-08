'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters
// (the square size and the fill color)
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

let sqSize: number = 50;
let rainColors: string[] = ["red", "green", "aqua", "magenta", "yellow", "blue"];
function rainbowSQ(squareSize: number, sqColor: string) {
    ctx.strokeStyle = sqColor;
    let startxx: number = canvas.width / 2 - squareSize / 2;
    let startyy: number = canvas.height / 2 - squareSize / 2;
    ctx.strokeRect(startxx, startyy, squareSize, squareSize);
}

function generateRandomNum(maxNum): number {
    let randomNum: number = Math.floor(Math.random() * maxNum);
    return randomNum;
}
for (let i: number = 0; i < canvas.height; i += 20) {
    let randomNum: number = generateRandomNum(rainColors.length);
    rainbowSQ(sqSize + i, rainColors[randomNum]);
}