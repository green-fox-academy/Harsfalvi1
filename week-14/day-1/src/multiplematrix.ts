"use strict";

export function multiplyItems(matrix: number[][]): number[][] {
  let transformedMatrix: number[][] = [];

  for (let i = 0; i < matrix.length; i++) {
    const row: number[] = matrix[i];
    if (i % 2 === 1) {
      transformedMatrix.push(row);
    } else {
      let transformedRow: number[] = [];

      for (let j = 0; j < row.length; j++) {
        const element: number = row[j];
        if (j % 2 === 0) {
          transformedRow.push(element * 2);
        } else {
          transformedRow.push(element);
        }
      }

      transformedMatrix.push(row);
    }
  }
  return transformedMatrix;
}

let nxnMatrix: number[][] = [
  [1, 3, 12, 4],
  [14, 10, 6, 2],
  [3, 3, 1, 5],
  [18, 0, 10, 6],
];

let anyMatrix: number[][] = [[4, 3], [10, 0, 4, 0], [12], [10, 2]];

console.log(multiplyItems(anyMatrix));
