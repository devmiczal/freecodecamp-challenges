// https://www.freecodecamp.org/learn/daily-coding-challenge/2025-08-31

function generateHex(colorName) {
  const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const toHex = (num) => num.toString(16).padStart(2, '0');

  let redHex, greenHex, blueHex;

  const primaryChannel = toHex(randomInt(180, 255));
  const secondaryChannel = toHex(randomInt(0, 150));

  switch (colorName.toLowerCase()) {
    case 'red':
      redHex = primaryChannel;
      greenHex = secondaryChannel;
      blueHex = secondaryChannel;
      break;
    case 'green':
      greenHex = primaryChannel;
      redHex = secondaryChannel;
      blueHex = secondaryChannel;
      break;
    case 'blue':
      blueHex = primaryChannel;
      redHex = secondaryChannel;
      greenHex = secondaryChannel;
      break;
    default:
      return 'Invalid color';
  }

  return `#${redHex}${greenHex}${blueHex}`;
}

console.log(generateHex('red'));
console.log(generateHex('green'));
console.log(generateHex('blue'));
console.log(generateHex('yellow'));
