'use strict';

let sum: number = 0;
let average:number = 0;

for (let i = 1; i <=5; i ++){
     sum += i;
     average= sum/i;
}
console.log('Sum: ' + sum +', Average: '+average);
// Write a program that calculates the sum and the average from 1 to a given number
// Example input: 5
// Example output: Sum: 15, Average: 3