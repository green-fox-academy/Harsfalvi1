import { calculateLines } from './matrixpractice';

describe('Matrix', () => { 
    let matrixWithPositiveIntegers = [[3, 4, 5, 6], [1, 2, 3, 2]];
    let matrixWithNegativeIntegers = [[-1, -9, -1],[-1, -2, -5]];
    let emptyMatrix = [];
    
    test('calculateLines with positive integers returns sum of each lines', () => {
        expect(calculateLines(matrixWithPositiveIntegers)).toEqual([18, 8]);
    });
    test('calculateLines with negative integers returns sum of each lines', () => {
        expect(calculateLines(matrixWithNegativeIntegers)).toEqual([-11, -8]);
    });
    test('calculateLines with empty matrix returns empty array', () => {
        expect(calculateLines(emptyMatrix)).toEqual([]);
    });
});