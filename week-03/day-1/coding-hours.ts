'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52
console.log(6*5*17);

let codingHours: number = (6*5*17);
let workHours: number = (17*52);
console.log(codingHours/workHours*100);
