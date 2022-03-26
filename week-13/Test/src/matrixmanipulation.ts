'use stirct'

export function changeNumberstoZero(matrix: number[][]): number[][] {
    let transformedMatrix: number [][] = [];
    for (let i = 0; i < matrix.length; i++) {
        const row: number [] = matrix[i];
        if (i === 0 || i === matrix.length-1){
            transformedMatrix.push(row);

        } else {
            let transformedRow: number [] = [];
            for (let j = 0; j < row.length; j++) {
                const element: number = row[j];
                if (j === 0 || j === row.length-1){
                    transformedRow.push(element);
                } else {
                    transformedRow.push(0);
                }
            }
            transformedMatrix.push(transformedRow);
        }
        
        
    }
    return transformedMatrix;
}
let input1: number [][] = 
[[1, 5, 3],
[2, 6, 4],
[8, 6, 9]]

let input: number [][] =
[[5, 3, 8, 9, 2],
[1, 0, 0, 0, 8],
[9, 0, 0, 0, 5],
[8, 2, 5 ,4, 9]]

console.log(changeNumberstoZero(input))