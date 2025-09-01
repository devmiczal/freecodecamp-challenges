import { tribonacciSequence } from './2025-09-01--tribonacci-sequence.js';

describe('2025-09-01 - Tribonacci Sequence', () => {
  test('should return the first 20 numbers of the sequence starting with [0, 0, 1]', () => {
    const startSequence = [0, 0, 1];
    const length = 20;
    const expected = [
      0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136, 5768, 10609, 19513,
    ];
    expect(tribonacciSequence(startSequence, length)).toEqual(expected);
  });

  test('should return the first element when length is 1', () => {
    const startSequence = [21, 32, 43];
    const length = 1;
    const expected = [21];
    expect(tribonacciSequence(startSequence, length)).toEqual(expected);
  });

  test('should return an empty array when length is 0', () => {
    const startSequence = [0, 0, 1];
    const length = 0;
    const expected = [];
    expect(tribonacciSequence(startSequence, length)).toEqual(expected);
  });

  test('should return the first two elements when length is 2', () => {
    const startSequence = [10, 20, 30];
    const length = 2;
    const expected = [10, 20];
    expect(tribonacciSequence(startSequence, length)).toEqual(expected);
  });

  test('should return the first three elements when length is 3', () => {
    const startSequence = [10, 20, 30];
    const length = 3;
    const expected = [10, 20, 30];
    expect(tribonacciSequence(startSequence, length)).toEqual(expected);
  });

  test('should return the first 8 numbers of the sequence starting with [123, 456, 789]', () => {
    const startSequence = [123, 456, 789];
    const length = 8;
    const expected = [123, 456, 789, 1368, 2613, 4770, 8751, 16134];
    expect(tribonacciSequence(startSequence, length)).toEqual(expected);
  });
});
