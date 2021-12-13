'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

/* Kétféle megoldást készítettem:
let toBeReversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;
function reverse(reverseString: string) {
    let newString: string= ""
        for (let i = reverseString.length - 1; i >= 0; i--) {
            newString += reverseString[i]
            
        }
    return newString
}
console.log(reverse(toBeReversed));

export = reverse;*/

let toBeReversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;
function reverseString(str: string) {
    let splitString = str.split("")
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("")
    return joinArray;
}
console.log(reverseString(toBeReversed));