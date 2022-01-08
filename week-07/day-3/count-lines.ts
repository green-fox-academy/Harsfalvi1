// Write a function called countLines() that takes a filename as string as a parameter
// and returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error..

const fs = require("fs");

function countLines(filename: string) {
  try {
    let numberOfLines = fs.readFileSync("my-file.txt", "utf8").split("\r\n");
    return numberOfLines.length;
  } catch (error) {
    return 0;
  }
}
console.log(countLines("my-file.txt"));
