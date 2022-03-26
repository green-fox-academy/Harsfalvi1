import { multiplyItems } from './multiplematrix';

describe('Lists', () => { 
    
    
    test('multiplyItems with n x n matrix return one n x n matrix with correctly multiplied numbers', () => {
        let nxnMatrix = [
            [1, 3, 12, 4],
            [14, 10, 6, 2],
            [3, 3, 1, 5],
            [18, 0, 10, 6],
          ];
        expect(multiplyItems(nxnMatrix)).toEqual([
            [1,  3,  12, 4],
            [14, 10, 6,  2],
            [3,  3,  1,  5],
            [18, 0,  10, 6]
          ]);
    });
    
    test('multiplyItems with any layout matrix return matrix with same layout with correctly multiplied numbers', () => {
        let anyMatrix = [[4, 3], [10, 0, 4, 0], [12], [10, 2]];
        expect(multiplyItems(anyMatrix)).toEqual([
            [4,  3],
            [10, 0, 4, 0],
            [12],
            [10, 2]
          ]);
    });

    test('multiplyItems with empty matrix return empty matrix', () => {
        let emptyMatrix = [];
        expect(multiplyItems(emptyMatrix)).toEqual([]);
    });
});