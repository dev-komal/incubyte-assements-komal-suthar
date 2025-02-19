import { add, CommaSeparated, customDelimiters, negativeNumbers, newlineBetweenNumber, singleNumber } from '../component/add';

test('returns 0 for an empty string', () => {
  expect(add("")).toBe(0);
});

// Add Single Number Support
test('returns the number when given a single number', () => {
  expect(singleNumber("1")).toBe(1);
});

// Handle Comma-Separated Numbers
test('returns the sum of multiple numbers separated by commas', () => {
  expect(CommaSeparated("1,2")).toBe(3);
  expect(CommaSeparated("1,2,3")).toBe(6);
});

  // Support Newlines Between Numbers
test('handles newlines between numbers', () => {
  expect(newlineBetweenNumber("1\n2,3")).toBe(6);
});


  // Support Custom Delimiters
  test('supports custom delimiters', () => {
    expect(customDelimiters("//;\n1;2")).toBe(3);
    expect(customDelimiters("//|\n2|3|4")).toBe(9);
  });

  // Throw Error for Negative Numbers
test('throws an error when negative numbers are included', () => {
  expect(() => negativeNumbers("1,-2")).toThrowError("Negative numbers not allowed: -2");
  expect(() => negativeNumbers("1,-2,-3")).toThrowError("Negative numbers not allowed: -2,-3");
});
