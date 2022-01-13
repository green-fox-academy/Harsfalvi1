//Given base and n that are both 1 or more,
//write a recursive method (no loops) which returns the value of base to the n-th power,
//so powerN(3, 2) is 9 (3 squared)

function getPowerN(n: number, x: number): number {
  if (x < 1) {
    return 1;
  }
  return n * getPowerN(n, x - 1);
}
console.log(getPowerN(3, 2));
