//Given a string, write a recursive (no loops) method 
//which returns a new string with all the lowercase 'x' chars changed to 'y' chars.

let givenString: string = "Hi, I'm a random text with 'x' chars!"

function xToY(text:string): string {
    if (!text.includes("x")){
        return text
    }
    return xToY (text.replace("x","y"))
}
console.log(xToY(givenString))