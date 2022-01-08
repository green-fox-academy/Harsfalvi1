// Create a method called decryptDoubled() that takes a filename as string as a parameter
// and it can decrypt the duplicated-chars.txt file
// Decryption is the process reversing an encryption, i.e. the process
// which converts encrypted data into its original form.
// If the file can't be opened it should return this message: File not found
// The result should be saved in the output.txt file
const fs = require("fs");

function decryptDoubled(fileName: string) {
  try {
    let fileContent: string = fs.readFileSync(fileName, "utf-8");
    let newFileContent: string = "";

    for (let character = 0; character < fileContent.length; character += 2) {
      newFileContent += fileContent[character];
    }
    fs.writeFileSync("output.txt", newFileContent);
    return "File is decrypted";
  } catch (error) {
    console.error("File not found");
  }
}
console.log(decryptDoubled("duplicated-chars.txt"));
