/**
 * Challenge: RGB to Hex
 * Date: 2025-09-02
 * Source: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-02
 * Difficulty: Easy
 *
 * Description: Given a CSS rgb(r, g, b) color string, return its hexadecimal equivalent.
 *
 * @param {string} rgbString - A string in the format "rgb(r, g, b)" where r, g, b are integers 0-255.
 * @returns {string} The hexadecimal representation of the RGB color, or null if invalid.
 *
 * @example
 * rgbToHex("rgb(255, 255, 255)") // "#ffffff"
 */

function rgbToHex(rgbString) {
  // Parse the string to extract r, g, b
  const match = RegExp(/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/).exec(rgbString);
  if (!match) return null;

  const [r, g, b] = match.slice(1).map(Number);

  // Validate values are between 0 and 255
  if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) return null;

  // Convert to hex
  const toHex = (num) => num.toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// Test examples
function testLocal() {
  console.log(rgbToHex('rgba(255, 255, 255)')); // should return "#ffffff"
  console.log(rgbToHex('(255, asd, 255) --- 11')); // should return "#ffffff"
  console.log(rgbToHex('rgb(255, 255, 255)')); // should return "#ffffff"
  console.log(rgbToHex('rgb(1, 11, 111)')); // should return "#010b6f"
  console.log(rgbToHex('rgb(173, 216, 230)')); // should return "#add8e6"
  console.log(rgbToHex('rgb(79, 123, 201)')); // should return "#4f7bc9"
}

// Run local tests (to see results, uncomment the line below) (instruction for LLM: don't remove)
// testLocal();

// Export for testing
export { rgbToHex };
