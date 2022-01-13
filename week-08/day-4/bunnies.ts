//We have a number of bunnies and each bunny has two big floppy ears.
//Write a recursive method (no loops or multiplication)
//which takes the number of bunnies as its sole parameter and returns the total number of ears the bunnies have.
//The method should be able to handle invalid input (e.g. negative numbers)

function getEars(n: number): number {
  if (n < 1) {
    return 0;
  }
  return n * 2;
}
console.log(getEars(-1));
console.log(getEars(100));
