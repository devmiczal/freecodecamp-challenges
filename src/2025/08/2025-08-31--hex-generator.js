/**
 * ? Challenge: Hex Color Generator
 * ? Date: 2025-08-31
 * ? Source: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-08-31
 * ? Difficulty: Medium
 *
 * ? Description:
 * ? Generate a random hex color code with the specified dominant color.
 * ? The dominant color should have a higher value than the other two colors.
 *
 * @param {string} colorName - The dominant color name ('red', 'green', or 'blue')
 * @return {string} Six-character hex color code or "Invalid color"
 */

function generateHex(colorName) {
  // Handle null, undefined, or non-string inputs
  if (!colorName || typeof colorName !== 'string') {
    return 'Invalid color';
  }

  const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const toHex = (num) => num.toString(16).padStart(2, '0');

  // Generate dominant channel (higher values)
  const dominantValue = randomInt(180, 255);
  // Generate secondary channels (lower values to ensure dominance)
  const secondaryValue1 = randomInt(0, 150);
  const secondaryValue2 = randomInt(0, 150);

  let redHex, greenHex, blueHex;

  switch (colorName.toLowerCase()) {
    case 'red':
      redHex = toHex(dominantValue);
      greenHex = toHex(secondaryValue1);
      blueHex = toHex(secondaryValue2);
      break;
    case 'green':
      greenHex = toHex(dominantValue);
      redHex = toHex(secondaryValue1);
      blueHex = toHex(secondaryValue2);
      break;
    case 'blue':
      blueHex = toHex(dominantValue);
      redHex = toHex(secondaryValue1);
      greenHex = toHex(secondaryValue2);
      break;
    default:
      return 'Invalid color';
  }

  return `${redHex}${greenHex}${blueHex}`;
}

// Test examples
function testLocal() {
  console.log('Red colors:');
  console.log(`#${generateHex('red')}`);
  console.log(`#${generateHex('red')}`);

  console.log('\nGreen colors:');
  console.log(`#${generateHex('green')}`);
  console.log(`#${generateHex('green')}`);

  console.log('\nBlue colors:');
  console.log(`#${generateHex('blue')}`);
  console.log(`#${generateHex('blue')}`);

  console.log('\nInvalid color:');
  console.log(`#${generateHex('yellow')}`);
}

// Run tests
// testLocal();

// Export for testing
export { generateHex };
