/*Write a method that receives a filename as a string as parameter
  and returns the words present (as a list) in the file which either start with
  "de" or ends with "bug". The logic shall not be case sensitive.

  In case of any errors during file reading and data parsing the method
  shall display: "Cannot read the bloody file"*/

  // Ki kell venni az írásjeleket. 

import fs from 'fs';
import { EOL } from "os";

function readFile(filename: string): string {
    try {
        return fs.readFileSync(filename, {encoding: "utf8", flag: "r"});
    } catch {
        throw new Error("Cannot read the bloody file");
    }
}

function isValidWordCharacter(ch: string): boolean {
    // Let's assume that a word can only contain small or capital letters, dash
    // and apostrophe
    return (ch >= "a" && ch <= "z") ||
        (ch >= "A" && ch <= "Z") ||
        ch === "-" ||
        ch === "'"
}
function getWordsWithDeorBug(filename: string): string [] {
    const result: string [] = [];
    const fileContent = readFile(filename);
        
    const lines: string[] = fileContent.split(EOL); //először a sortöréseket vesszük ki
    for (let i = 0; i < lines.length; i++) {
      const wordsList: string[] = lines[i].split(" "); //végigmegyünk a sorokon, minden sort feldarabolunk szavakra
      for (let j = 0; j < wordsList.length; j++) {
        const characters: string[] = wordsList[j].split(""); //karakterekre darabolunk
        let wordsWithValidCharacters: string = ""; //a legbelső for cikluson kívül kell létrehozni, hogy lássa az if utána
        for (let k = 0; k < characters.length; k++) {
          if (isValidWordCharacter(characters[k])) {
            wordsWithValidCharacters += characters[k];
          }
        }
        if (
          wordsWithValidCharacters.toLowerCase().startsWith("de") ||
          wordsWithValidCharacters.toLowerCase().endsWith("bug")
        ) {
          result.push(wordsWithValidCharacters);
        }
      }
    }
    return result;
    }
    
console.log(getWordsWithDeorBug("Debug.txt"))

