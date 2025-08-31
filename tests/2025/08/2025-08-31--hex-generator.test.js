/**
 * ? Tests for Hex Color Generator Challenge
 * ? Date: 2025-08-31
 */

import { generateHex } from '../../../src/2025/08/2025-08-31--hex-generator.js';

describe('Hex Generator Challenge', () => {
  // Helper function to convert hex to decimal
  const hexToDec = (hex) => parseInt(hex, 16);

  // Helper function to parse hex color into RGB components
  const parseHexColor = (hexColor) => {
    if (hexColor.length !== 6) return null;
    return {
      red: hexToDec(hexColor.substring(0, 2)),
      green: hexToDec(hexColor.substring(2, 4)),
      blue: hexToDec(hexColor.substring(4, 6)),
    };
  };

  // Helper function to check if string is valid hex
  const isValidHex = (str) => /^[0-9a-f]{6}$/i.test(str);

  // Test 1: Invalid color should return "Invalid color"
  test('generateHex("yellow") should return "Invalid color"', () => {
    expect(generateHex('yellow')).toBe('Invalid color');
  });

  // Test 2: Should return six-character string
  test('generateHex("red") should return a six-character string', () => {
    const result = generateHex('red');
    expect(result).toHaveLength(6);
  });

  // Test 3: Should return valid hex color code
  test('generateHex("red") should return a valid six-character hex color code', () => {
    const result = generateHex('red');
    expect(isValidHex(result)).toBe(true);
  });

  // Test 4: Red should be dominant in red color
  test('generateHex("red") should return a valid hex color with a higher red value than other colors', () => {
    const result = generateHex('red');
    const rgb = parseHexColor(result);

    expect(rgb).not.toBeNull();
    expect(rgb.red).toBeGreaterThan(rgb.green);
    expect(rgb.red).toBeGreaterThan(rgb.blue);
  });

  // Test 5: Multiple red generations should be different with red dominant
  test('Calling generateHex("red") twice should return two different hex color values where red is dominant', () => {
    const result1 = generateHex('red');
    const result2 = generateHex('red');

    // Should be different values
    expect(result1).not.toBe(result2);

    // Both should have red as dominant
    const rgb1 = parseHexColor(result1);
    const rgb2 = parseHexColor(result2);

    expect(rgb1.red).toBeGreaterThan(rgb1.green);
    expect(rgb1.red).toBeGreaterThan(rgb1.blue);
    expect(rgb2.red).toBeGreaterThan(rgb2.green);
    expect(rgb2.red).toBeGreaterThan(rgb2.blue);
  });

  // Test 6: Multiple green generations should be different with green dominant
  test('Calling generateHex("green") twice should return two different hex color values where green is dominant', () => {
    const result1 = generateHex('green');
    const result2 = generateHex('green');

    // Should be different values (run multiple times to ensure randomness)
    let attempts = 0;
    let different = false;

    while (attempts < 10 && !different) {
      const test1 = generateHex('green');
      const test2 = generateHex('green');
      if (test1 !== test2) {
        different = true;
      }
      attempts++;
    }

    expect(different).toBe(true);

    // Both should have green as dominant
    const rgb1 = parseHexColor(result1);
    const rgb2 = parseHexColor(result2);

    expect(rgb1.green).toBeGreaterThan(rgb1.red);
    expect(rgb1.green).toBeGreaterThan(rgb1.blue);
    expect(rgb2.green).toBeGreaterThan(rgb2.red);
    expect(rgb2.green).toBeGreaterThan(rgb2.blue);
  });

  // Test 7: Multiple blue generations should be different with blue dominant
  test('Calling generateHex("blue") twice should return two different hex color values where blue is dominant', () => {
    const result1 = generateHex('blue');
    const result2 = generateHex('blue');

    // Should be different values (run multiple times to ensure randomness)
    let attempts = 0;
    let different = false;

    while (attempts < 10 && !different) {
      const test1 = generateHex('blue');
      const test2 = generateHex('blue');
      if (test1 !== test2) {
        different = true;
      }
      attempts++;
    }

    expect(different).toBe(true);

    // Both should have blue as dominant
    const rgb1 = parseHexColor(result1);
    const rgb2 = parseHexColor(result2);

    expect(rgb1.blue).toBeGreaterThan(rgb1.red);
    expect(rgb1.blue).toBeGreaterThan(rgb1.green);
    expect(rgb2.blue).toBeGreaterThan(rgb2.red);
    expect(rgb2.blue).toBeGreaterThan(rgb2.green);
  });

  // Additional edge case tests
  describe('Edge Cases', () => {
    test('should handle case insensitive input', () => {
      expect(generateHex('RED')).toMatch(/^[0-9a-f]{6}$/i);
      expect(generateHex('Green')).toMatch(/^[0-9a-f]{6}$/i);
      expect(generateHex('BLUE')).toMatch(/^[0-9a-f]{6}$/i);
    });

    test('should return "Invalid color" for null or undefined', () => {
      expect(generateHex(null)).toBe('Invalid color');
      expect(generateHex(undefined)).toBe('Invalid color');
    });

    test('should return "Invalid color" for empty string', () => {
      expect(generateHex('')).toBe('Invalid color');
    });

    test('should return "Invalid color" for unsupported colors', () => {
      expect(generateHex('purple')).toBe('Invalid color');
      expect(generateHex('orange')).toBe('Invalid color');
      expect(generateHex('cyan')).toBe('Invalid color');
    });
  });

  // Performance test
  describe('Performance and Consistency', () => {
    test('should generate different colors consistently', () => {
      const results = new Set();

      // Generate 50 red colors
      for (let i = 0; i < 50; i++) {
        results.add(generateHex('red'));
      }

      // Should have generated multiple unique values
      expect(results.size).toBeGreaterThan(10);
    });

    test('dominant color should always be in correct range', () => {
      for (let i = 0; i < 20; i++) {
        const redResult = generateHex('red');
        const redRgb = parseHexColor(redResult);
        expect(redRgb.red).toBeGreaterThanOrEqual(180);
        expect(redRgb.red).toBeLessThanOrEqual(255);

        const greenResult = generateHex('green');
        const greenRgb = parseHexColor(greenResult);
        expect(greenRgb.green).toBeGreaterThanOrEqual(180);
        expect(greenRgb.green).toBeLessThanOrEqual(255);

        const blueResult = generateHex('blue');
        const blueRgb = parseHexColor(blueResult);
        expect(blueRgb.blue).toBeGreaterThanOrEqual(180);
        expect(blueRgb.blue).toBeLessThanOrEqual(255);
      }
    });
  });
});
