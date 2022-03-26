import { changeNumberstoZero } from './matrixmanipulation';

describe('Matrix', () => { 
    
    test('changeNuberstoZero with 3x3 matrix change middle element', () => {
        let matrix3x3 = [
          [1, 5, 3],
          [2, 6, 4],
          [8, 6, 9],
        ];
        let outputMatrix = [
          [1, 5, 3],
          [2, 0, 4],
          [8, 6, 9],
        ];
        expect(changeNumberstoZero(matrix3x3)).toEqual(outputMatrix);
    });
    test('changeNuberstoZero with 5x5 matrix change two middle row middle elements', () => {
        let matrix5x5 = [
          [5, 3, 8, 9, 2],
          [1, 5, 2, 7, 8],
          [9, 2, 4, 3, 5],
          [8, 2, 5, 4, 9],
        ];

        let outputMatrix = [
          [5, 3, 8, 9, 2],
          [1, 0, 0, 0, 8],
          [9, 0, 0, 0, 5],
          [8, 2, 5, 4, 9],
        ];
        expect(changeNumberstoZero(matrix5x5)).toEqual(outputMatrix);
    });
    test('changeNuberstoZero with empty matrix returns empty array', () => {
        let emptyMatrix = [];
        expect(changeNumberstoZero(emptyMatrix)).toEqual([]);
    });
});