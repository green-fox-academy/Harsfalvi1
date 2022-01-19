// Write a function that copies the contents of a file into another file
// It should take two filenames as parameters
// It should return a boolean that shows if the copy was successful

const fs = require("fs");

function copyContent(sourceFileName: string, newFileName: string): boolean {
  try {
    const fileContent: string = fs.readFileSync(sourceFileName, "utf-8");
    fs.writeFileSync(newFileName, fileContent);
    return true;

  } catch (error) {
    console.error(error);
    return false
  }
}
console.log(copyContent("my-file.txt", "my-new-file.txt"));
