//We have bunnies standing in a line numbered as 1, 2, ...
//The "odd" bunnies (1, 3, ...) have the usual number of ears = 2.
//However, the even bunnies (2, 4, ...) have 3 ears each (because they have a raised foot).
//Write a recursive method which accepts the number of bunnies as a parameter and returns the total number of "ears" in the bunny line.
//The method should be able to handle invalid input (e.g. negative numbers).
function getBunnieEars(bunniesNumber: number): number {
  let oddBunniesEars: number = 2;
  let raisedFootBunniesEars: number = 3;
  if (bunniesNumber < 1) {
    return 0;
  } else {
    if (bunniesNumber % 2 === 0) {
      raisedFootBunniesEars += getBunnieEars(bunniesNumber - 2);
    } else {
      oddBunniesEars += getBunnieEars(bunniesNumber - 2);
    }
  }
  return raisedFootBunniesEars + oddBunniesEars;
}
console.log(getBunnieEars(6));
