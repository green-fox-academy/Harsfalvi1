//Create a two dimensional list dynamically with the following content.
 //   Note that a two dimensional list is often called matrix if every
 //   internal list has the same length.
 //   Use a loop!
 //
 //   1 0 0 0
 //   0 1 0 0
 //   0 0 1 0
 //   0 0 0 1
 //
 //   Its length should depend on a variable
 //  

 let matrix: number [][] = [];
 let size: number = 4;
 for (let i = 0; i < size; i++) {
     let innerArr: number [] = [];
     for (let j = 0; j < size; j++) {
         if (j === i){
             innerArr[j] = 1;
         } else {
             innerArr[j] = 0;
         }
     }
  matrix[i] = innerArr
  console.log (matrix[i]);   
 }
 

 