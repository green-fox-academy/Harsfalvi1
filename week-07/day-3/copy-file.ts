// Write a function that copies the contents of a file into another file
// It should take two filenames as parameters
// It should return a boolean that shows if the copy was successful

const fs = require("fs");

function copyContent(sourceFileName: string, newFileName: string): boolean {
  try {
    const fileContent: string = fs.readFileSync(sourceFileName, "utf-8");
    const newFileContent: string = fs.writeFileSync(newFileName, fileContent);

    fileContent === newFileContent;
  } catch (error) {
    console.error(error);
  }
  return true;
}
console.log(copyContent("my-file.txt", "my-new-file.txt"));
