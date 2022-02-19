import { addNum, divide, isPrime } from './math'

test('adds 1 + 2 to equal 3', () => {
  expect(addNum(1, 2)).toBe(3);
});

test('divide with zero throw exception', () => {
  expect(divide(6, 0)).toThrow('Unable to divide by 0');
});

test('divide with two positives return valid positive result',() => {
  expect(divide(6, 3)).toBe(2);
});

test('isPrime with prime return true',() => {
  expect(isPrime(19)).toBeTruthy();
});