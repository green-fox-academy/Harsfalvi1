'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]

let position: number = 10;
let numberOfSquare: number = 19
let size: number = 20;


    for (let squareCounter: number = 0; squareCounter < numberOfSquare; squareCounter++) {
        ctx.fillStyle ="purple"
        ctx.fillRect(position, position, size, size);
        position += size
    }

//Bele kell-e/érdemes-e belehelyezni funcionba? Ha igen,milyen paraméterekkel?
// Hogyan lehetne megadni a változók értékét megadni a canvashoz viszonyítva: pl.
//Pl. let size: number = (canvas.width-positon*2)/numberOfSquare. Így túl nagyok.
//A size-ot is ki lehet vele számoltatni a canvas méretéből? 