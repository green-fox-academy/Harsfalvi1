//Create a function that takes one string and one integer array as parameters 
//and returns the occurrences of the strings that are present on the indexes of the second array
//Input: ["p", "h", "f", "t", "e", "z", "p", "g", "f", "f",  "p"] and [2, 5, 6 ]
//Feltételezhetjük, hogy nincs túlindexelés.
/*Output:
{
   "f": 3,
   "z": 1,
  "p": 2
}*/

export function checkOccurences (matrix: number[][]): number[] {
    let array1: string [] = ["p", "h", "f", "t", "e", "z", "p", "g", "f", "f",  "p"];
    let array2: number [] = [2, 5, 6 ];
    let charactersOnIndexes: number[] = [];
    
    for (let i = 0; i < matrix.length; i++) {
        array1.indexOf(array2[i])
      let occurrencesOfOneCharacter: number = 0;
      for (let j = 0; j < matrix[i].length; j++) {
        
      }
      
    }
    
  }