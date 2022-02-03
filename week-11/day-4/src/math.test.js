import { addNum, divide, isPrime } from './math'

test('adds 1 + 2 to equal 3', () => {
  expect(addNum(1, 2)).toBe(3);
});

test('Unable to divide by 0', () => {
  expect(divide(6, 0)).toThrow('Unable to divide by 0');
});

test('divide 6 by 3',() => {
  expect(divide(6, 3)).toBe(2);
});

test('19 is a prime',() => {
  expect(isPrime(19)).toBe(true);
});