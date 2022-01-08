// Create a function that divides number 10
// by a number that's passed as a paramater and prints the result.
// It should print "fail" if the parameter is 0

//saját megoldás:
function divideByNumber(x: number, y: number) {
  try {
    if (y !== 0) {
      return x / y;
    } else {
      throw new Error("fail");
    }
  } catch (error) {
    console.log(error);
  }
}

divideByNumber(10, 0);
console.log(divideByNumber(10, 2));

//közösen készítettük:
function divideNumberTen(divider:number):void {
    let result: number = 10/divider;
    if (divider == 0) {
        console.log ('fail');
    } else {
        console.log (result);  
    }  
}

divideNumberTen(0);