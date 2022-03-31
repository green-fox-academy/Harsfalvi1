"use strict";

const mapWith = (array, callback) => {
  let output = [];

  for (let i = 0; i < array.length; i++) {
    const transformedElem = callback(array[i]);
    output.push(transformedElem);
  }
  return output;
};

const addOne = (number) => {
  return number + 1;
};

// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

// Exercise 2:

// Create a callback function which removes every second character from a string
const removeLetters = (word) => {
  let shorterString = "";
  for (let i = 0; i < word.length; i++) {
    if (!(i % 2)) {
      shorterString += word[i];
    }
  }
  return shorterString;
};
const words = ["map", "reduce", "filter"];

console.log(mapWith(words, removeLetters));
// expected result: ['mp','rdc', 'fle']
