'use strict';

let number: number = 15;

// Create a program that
// prints the multiplication table with number
//
// Example:
// The number 15 should print:
//
// 1 * 15 = 15
// 2 * 15 = 30
// 3 * 15 = 45
// 4 * 15 = 60
// 5 * 15 = 75
// 6 * 15 = 90
// 7 * 15 = 105
// 8 * 15 = 120
// 9 * 15 = 135
// 10 * 15 = 150

export function multiplicationTable(number: number) {
      for(let i=1; i<=10; i++) {
          let myResult: number= i*15;
          console.log (i + ' * ' +number + ' = ' + myResult);
      }
  // write your code here for Gradescope testing
}
