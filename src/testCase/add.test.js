import {
  add,
  CommaSeparated,
  customDelimiters,
  negativeNumbers,
  newlineBetweenNumber,
  singleNumber,
} from "../component/add";

// Pass test case when return 0
test("returns 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

// Failed the case when return 5
test("returns the number when a single number is passed", () => {
  expect(add("")).toBe(5);
});

// Add Single Number Support
test("returns the number when given a single number", () => {
  expect(singleNumber("1")).toBe(1);
});

// Failed Test Case When Return 10 as String
test("returns the number when given a single number", () => {
  expect(singleNumber("10")).toBe("10");
});

// Handle Comma-Separated Numbers(pass test case)
test("returns the sum of multiple numbers separated by commas", () => {
  expect(CommaSeparated("1,2")).toBe(3);
  expect(CommaSeparated("1,2,3")).toBe(6);
});

// Handle Comma-Separated Numbers(failed test case)
test("returns the sum of multiple numbers separated by commas", () => {
  expect(CommaSeparated("1,2")).toBe(4);
  expect(CommaSeparated("1,2,3")).toBe(10);
});

// Support Newlines Between Numbers(passed test cases)
test("handles newlines between numbers", () => {
  expect(newlineBetweenNumber("1\n2,3")).toBe(6);
});

// Support Newlines Between Numbers(failed test cases)
test("handles newlines between numbers(when no /n)", () => {
  expect(newlineBetweenNumber("1;2,3")).toBe(6);
});

// Support Custom Delimiters(pass test case)
test("supports custom delimiters", () => {
  expect(customDelimiters("//;\n1;2")).toBe(3);
  expect(customDelimiters("//|\n2|3|4")).toBe(9);
});

// Support Custom Delimiters(failed test case)
test("supports custom delimiters", () => {
  expect(customDelimiters("2|3|4")).toBeNaN();
});

// Throw Error for Negative Numbers(test case pass)
test("throws an error when negative numbers are included", () => {
  expect(() => negativeNumbers("1,-2")).toThrowError(
    "Negative numbers not allowed: -2"
  );
  expect(() => negativeNumbers("1,-2,-3")).toThrowError(
    "Negative numbers not allowed: -2,-3"
  );
});

// Throw Error for Negative Numbers(test case failed because we have not check negative number)
test("throws an error when negative numbers are included", () => {
  expect(() => negativeNumbers("1,2")).toThrowError(
    "Negative numbers not allowed: -2"
  );
});
