
// Write a function called `sum()` that returns the sum of numbers from zero to the given parameter
function sum(n: number): number {
    let result: number = 0;
    for (let i:number = 0; i <= n; i++) {
        result += i;
    }
    return result;
  }
 console.log(sum(10));

 /*function sum(n: number) {
    return n * (n + 1) / 2;
  }
  
  console.log(sum(10));*/