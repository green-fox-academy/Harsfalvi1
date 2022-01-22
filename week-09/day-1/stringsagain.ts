//Given a string, write a recursive (no loops) method which 
//returns a new string with all the lowercase 'x' chars removed.

let givenString2: string = "Hi, I'm a random text with 'x' chars!"

function removeX(text:string): string {
    if (!text.includes("x")){
        return text
    }
    return removeX (text.replace("x",""))
}
console.log(removeX(givenString2))