// Create a function that receives an n x m number matrix
// and returns an array containing the sum of each line (módosítva)
/*
[3, 4, 5, 6]
[1, 2, 3, 2]

returns 
[18, 8]*/

export function calculateLines(matrix: number[][]): number[] {
  let sumOfEachLine: number[] = [];
  for (let i = 0; i < matrix.length; i++) {
    let sumOfOneLine: number = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      sumOfOneLine += matrix[i][j];
    }
    sumOfEachLine.push(sumOfOneLine);
  }
  return sumOfEachLine;
}
