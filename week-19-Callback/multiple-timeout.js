"use strict";
// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds

const printFruit = (delay, fruit) => {
  if (delay === 0) {
    console.log(fruit);
  } else {
    setTimeout(() => {
      console.log(fruit);
    }, delay);
  }
};

printFruit(0, "apple");
printFruit(1000, "pear");
printFruit(3000, "melon");
printFruit(5000, "grapes");
