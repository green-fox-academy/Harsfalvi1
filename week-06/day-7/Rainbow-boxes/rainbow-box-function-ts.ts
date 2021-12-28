'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters
// (the square size and the fill color)
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

/*function drawRainbowBoxes(rectWidth: number, rectHeight: number) {
    let positionX = 0;
    let positionY = 0;
    for (let rectCounter = 0; rectCounter < 18; rectCounter++) {
        
        ctx.strokeRect(positionX, positionY, rectWidth, rectHeight);
        positionX += 10;
        positionY += 10;
        rectWidth -= 20;
        rectHeight -= 20;

    }
}
drawRainbowBoxes(canvas.width, canvas.height)  */
        
            
    
function drawRainbowBoxes(rectWidth: number, rectHeight: number, color: string) {
    let positionX = 0;
    let positionY = 0;
    ctx.strokeStyle = color;
    ctx.strokeRect(positionX, positionY, rectWidth, rectHeight);
    let rainbow: string [] = ['red', 'orange', 'yellow', "green", 'blue', 'indigo', 'purple'];
    positionX += 10;
        positionY += 10;
    
    for (let rectCounter = 0; rectCounter < 18; rectCounter++) {
        for (let i = 0; i < rainbow.length; i++) {
        
        rectWidth -= 20;
        rectHeight -= 20;
        drawRainbowBoxes(canvas.width, canvas.height, rainbow[i])
    };
    
};
  

}