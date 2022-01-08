// Write a program that opens a file called "my-file.txt" and prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// it should print the following error message: "Unable to read file: my-file.txt"
const fs = require('fs');

try {
    console.log(fs.readFileSync ('my-file.txt','utf8'));
} catch (error) {
    console.error('Unable to read file: my-file.txt');
}