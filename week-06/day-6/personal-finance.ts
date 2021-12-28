//Create a list with the following items: 500, 1000, 1250, 175, 800 and 120
const expenses: number [] = [500, 1000, 1250, 175, 800, 120];

//How much did we spend?
const reducer = (previousValue: number, currentValue: number) => previousValue + currentValue;
console.log(expenses.reduce(reducer));

//Which was our greatest expense?
//console.log(Math.max.apply(null, expenses));
console.log(Math.max(...expenses));

//Which was our cheapest spending?
console.log(Math.min(...expenses));

//What was the average amount of our spendings? (print this as a float value)
console.log(expenses.reduce(reducer)/expenses.length);