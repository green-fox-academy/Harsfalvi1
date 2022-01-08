"use strict";
//  Create a function that takes a number and an array of numbers as a parameter
//  and returns the indices of the numbers of the array which contain the given number
//  or returns an empty list (if the number is not part of any of the numbers in the array)
// Example

let listOfNumbers2: number[] = [1, 11, 34, 52, 61, 1];
function findMatchingIndexes(subNumber: number, listOfNumber: number[]) {
  let matchingIndexes: number[] = [];
  for (let index = 0; index < listOfNumber.length; index++) {
    let elementInString = listOfNumber[index].toString();
    if (elementInString.includes(subNumber.toString())) {
      console.log(index);
      matchingIndexes.push(index);
    }
  }
  return matchingIndexes;
}
console.log(findMatchingIndexes(4, listOfNumbers2));
