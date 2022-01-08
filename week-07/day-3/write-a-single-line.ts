// Write a function that is able to manipulate a file
// by writing your name into it as a single line.
// The file should be named "my-file.txt".
// In case the program is unable to write the file,
// it should print the following error message: "Unable to write file: my-file.txt".

const fs = require("fs");

function writeMyName(fileName: string) {
  try {
    fs.writeFileSync("my-name.txt", "Hársfalvi Éva", { flag: "a+" });
    return fileName;
  } catch (error) {
    console.error("Unable to write file: my-file.txt");
  }
}
writeMyName("my-file.txt");
