// Create a function that receives an nxm matrix of numbers
  // and returns an array containing the average of each column 

  export function getColumnAverage(matrix: number[][]): number[] {
    if (matrix.length === 0){
      return [];
    }
    let averigeOfEachColumn: number[] = [];
    for (let j = 0; j < matrix[0].length; j++) {
      let averageOfOneColumn: number = 0;
      for (let i = 0; i < matrix.length; i++) {
        averageOfOneColumn += matrix[i][j] / matrix.length
      }
      averigeOfEachColumn.push(averageOfOneColumn);
    }
    return averigeOfEachColumn;
  }

  const matrix: number[][] = [
    [1, 5, 4, 1],
    [3, 6, 5, 5],
    [8, 4, 3, 9],
];
let matrixWithNegativeIntegers = [[-1, -9, -1],[-1, -2, -5]];
console.log(getColumnAverage(matrixWithNegativeIntegers))