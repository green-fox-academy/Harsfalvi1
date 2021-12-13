'use strict';

let example: string = 'In a dishwasher far far away';

// I would like to replace "dishwasher" with "galaxy" in this example variable, but it has a problem
// Please fix it for me!
// Expected ouput: In a galaxy far far away
let newExample: string = example.replace (/dishwasher/g, "galaxy");

console.log(newExample);

export = example;