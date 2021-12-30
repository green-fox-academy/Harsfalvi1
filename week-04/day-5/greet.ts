// -  Create variable named `nameToGreet` and assign the value `Green Fox` to it
// -  Create a function called `greet()` that greets its input parameter
//     - It prints a greeting message e.g. `Greetings dear Green Fox`
// -  Greet `nameToGreet`
    let nameToGreet: string= 'Green Fox'
function greet(nameToGreet:string) {
    console.log('Greetings dear ' + nameToGreet);
    return greet;    
}
greet(nameToGreet);