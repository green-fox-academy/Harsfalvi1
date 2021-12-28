'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

let starSize:number = 3

function drawStarryNight(allStar:number) {

    for (let starCounter = 0; starCounter < allStar; starCounter++) {
        let randomNumberX: number = Math.floor(Math.random() * canvas.width)
        let randomNumberY: number = Math.floor(Math.random() * canvas.height)
        let randomNumberColor: number = Math.floor(Math.random() * 255)

        ctx.fillStyle = `rgb(${randomNumberColor},${randomNumberColor},${randomNumberColor})`
        ctx.fillRect(randomNumberX, randomNumberY, starSize, starSize);
    }
}
drawStarryNight(777)