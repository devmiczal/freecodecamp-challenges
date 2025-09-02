import { rgbToHex } from './2025-09-02--rbg-to-hex.js';

describe('2025-09-02 - RGB to Hex', () => {
  test('should convert rgb(255, 255, 255) to #ffffff', () => {
    expect(rgbToHex('rgb(255, 255, 255)')).toBe('#ffffff');
  });

  test('should convert rgb(1, 11, 111) to #010b6f', () => {
    expect(rgbToHex('rgb(1, 11, 111)')).toBe('#010b6f');
  });

  test('should convert rgb(173, 216, 230) to #add8e6', () => {
    expect(rgbToHex('rgb(173, 216, 230)')).toBe('#add8e6');
  });

  test('should convert rgb(79, 123, 201) to #4f7bc9', () => {
    expect(rgbToHex('rgb(79, 123, 201)')).toBe('#4f7bc9');
  });

  test('should return null for invalid input', () => {
    expect(rgbToHex('invalid')).toBeNull();
    expect(rgbToHex('rgb(256, 0, 0)')).toBeNull();
  });
});
