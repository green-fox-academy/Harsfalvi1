//Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
//Create a test for that.

     export function getIfAreAnagrams(string1: string,string2: string): boolean {
        let string1Array = string1.split("").sort().join("");
        let string2Array = string2.split("").sort().join("");
        if (string1Array !== string2Array)
            return false;
        return true;
    }

  