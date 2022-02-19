/*Follow these steps:
Add a new test case
Instantiate your class
create a list of integers
use the toEqual() matcher to test the result of the created sum method
Run it
Create different tests where you test your method with:
an empty list
a list that has one element in it
a list that has multiple elements in it
Run them
Fix your code if needed*/

import Integers from "./sum";
 
describe("Integers", () => {
  let numberArray = new Integers();
    test("With sum metod the sum of integers in an array return valid integer", () => {
        expect(numberArray.sum([4,5,11])).toEqual(20);
      });

      test("With sum method, when an array has one integer in it, the result is the integer", () => {
        expect(numberArray.sum([11])).toEqual(11);
      });  

      test("With sum method, if the array is empty return 0", () => { 
        expect(numberArray.sum([])).toEqual(0);
      });
  });
