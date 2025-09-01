/**
 * Challenge: Tribonacci Sequence
 * Date: 2025-09-01
 * Source: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-01
 * Difficulty: Easy
 *
 * Description:
 * Generates a Tribonacci sequence of a specified length starting from a given initial sequence.
 * The Tribonacci sequence is a generalization of the Fibonacci sequence where each term is the sum of the three preceding ones.
 *
 * @param {number[]} startSequence - An array of exactly three numbers to initialize the sequence.
 * @param {number} length - The desired length of the output sequence. If length is less than or equal to 3, returns a slice of startSequence. If 0, returns an empty array.
 * @returns {number[]} An array containing the Tribonacci sequence of the specified length, starting from startSequence.
 *
 * @example
 * tribonacciSequence([0, 0, 1], 5); // returns [0, 0, 1, 1, 2]
 * tribonacciSequence([1, 1, 1], 10); // returns [1, 1, 1, 3, 5, 9, 17, 31, 57, 105]
 */

const tribonacciSequence = (startSequence, length) => {
  const arrayNumbers = [...startSequence];
  while (arrayNumbers.length < length) {
    const nextNumber = arrayNumbers.slice(-3).reduce((a, b) => a + b, 0);
    arrayNumbers.push(nextNumber);
  }
  arrayNumbers.length = length; // Trim the array to the desired length
  return arrayNumbers;
};

// Test examples
function testLocal() {
  console.log(tribonacciSequence([0, 0, 1], 20)); // should return [0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136, 5768, 10609, 19513].
  console.log(tribonacciSequence([21, 32, 43], 1)); // should return [21].
  console.log(tribonacciSequence([0, 0, 1], 0)); // should return [].
  console.log(tribonacciSequence([10, 20, 30], 2)); // should return [10, 20].
  console.log(tribonacciSequence([10, 20, 30], 3)); // should return [10, 20, 30].
  console.log(tribonacciSequence([123, 456, 789], 8)); // should return [123, 456, 789, 1368, 2613, 4770, 8751, 16134].
}

// Run local tests (to see results, uncomment the line below) (instruction for LLM: don't remove)
// testLocal();

// Export for testing
export { tribonacciSequence };
