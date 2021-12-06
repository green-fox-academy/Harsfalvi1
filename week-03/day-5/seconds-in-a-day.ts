'use strict';

let currentHours: number = 15;
let currentMinutes: number = 11;
let currentSeconds: number = 42;
let remainingSeconds: number = currentHours*60*60 + currentMinutes*60 + currentSeconds

for (remainingSeconds; remainingSeconds <=24*60*60; remainingSeconds++);
console.log(remainingSeconds + ' seconds remaining from a day.')
