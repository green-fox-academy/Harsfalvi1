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
    test("The sum of 4,5,11 is 20", () => {
        expect(numberArray.sum([4,5,11])).toEqual(20);
      });

      test("When list that has one element in it, the result is the element", () => {
        expect(numberArray.sum([11])).toEqual(11);
      });  

      test("If the list is empty, sum is 0", () => { 
        expect(numberArray.sum([])).toEqual(0);
      });
  });
