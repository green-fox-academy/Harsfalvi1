// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

/*let yearsOfBirth: number []= [1985, 1978, 2017, 2018, 2019];
function printParams(params:number []) {
    console.log (params);
}
printParams(yearsOfBirth);*/

let yearsOfBirth: number []= [1985, 1978, 2017, 2018, 2019];
function printParams(params:number []) {
    console.log (arguments);
}
printParams(yearsOfBirth);