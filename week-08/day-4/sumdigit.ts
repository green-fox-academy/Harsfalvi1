//Given a non-negative integer n, return the sum of its digits recursively (without loops).
function sumOfDigit(n: number): number {
  if (n < 10) {
    return n;
  }
  return (n % 10) + sumOfDigit(Math.floor(n / 10));
}

console.log(sumOfDigit(1985));
