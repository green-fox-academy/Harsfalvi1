'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws a single line
// Parameters: the x and y coordinates of the line's starting point
// The function shall draw a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop



function drawLine(x:number, y:number) {
    let numberOfLines: number = 4  
    for (let line = 0; line < numberOfLines; line++) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(canvas.width/2, canvas.height/2);
        ctx.stroke()
        y += 20    
        } 
    }

drawLine (10,100)