//Write a function, that takes a string as an argument and 
//returns a dictionary with all letters in the  string as keys, and numbers as values 
//that shows how many occurrences there are.

export function countLetters(string:string): {[key: string]: number} {
    let dictionary: { [key: string]: number } = {};
    const charArray = string.split("");
    charArray.forEach(character => {
        if (dictionary[character]) {
            dictionary[character] += 1;
        } else {
            dictionary[character] = 1;
        }
    });
    return dictionary
}
