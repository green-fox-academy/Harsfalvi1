'use strict';

let a: number = 3;
a = a + 10;

console.log(a);

let b: number = 100;
b = b - 7;
console.log(b);

let c: number = 44;
c *= 2;

console.log(c);

let d: number = 125;
d /= 5;

console.log(d);

let e: number = 8;
e = e*e*e;

console.log(e);

let f1: number = 123;
let f2: number = 345;

console.log(f1>f2);

let g1: number = 350;
let g2: number = 200;

console.log(2*g2>g1);
 
let h: number = 1357988018575474;
console.log (h % 11 ==0);

let i1: number = 10;
let i2: number = 3;
console.log(i1>i2*i2);
console.log(i1<i2*i2*i2);
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)

let j: number = 1521;
console.log (j % 3 ==0 || j % 5 ==0);
// tell if j is divisible by 3 or 5 (as a boolean)