export function add(numbers) {
    if (numbers === "") {
      return 0;
    }
    return 0; // Temporary return value to pass the first test
  }
  
//  Add Single Number Support
export function singleNumber(numbers) {
    if (numbers === "") {
      return 0;
    }
    return parseInt(numbers); // Convert the string to a number
  }
  

// Handle Comma-Separated Numbers
  export function CommaSeparated(numbers) {
    if (numbers === "") {
      return 0;
    }
    const numArray = numbers.split(",").map(num => parseInt(num));
    return numArray.reduce((sum, num) => sum + num, 0);
  }
  
  // Support Newlines Between Numbers
export function newlineBetweenNumber(numbers) {
    if (numbers === "") {
      return 0;
    }
    const numArray = numbers.split(/[\n,]/).map(num => parseInt(num));
    return numArray.reduce((sum, num) => sum + num, 0);
  }
  
  // Support Custom Delimiters
export function customDelimiters(numbers) {
    if (numbers === "") {
      return 0;
    }
  
    let delimiter = ",";
    if (numbers.startsWith("//")) {
      delimiter = numbers[2]; // First character after "//"
      numbers = numbers.slice(4); // Remove the "//[delimiter]\n"
    }
  
    const numArray = numbers.split(new RegExp(`[${delimiter}\n]`)).map(num => parseInt(num));
    return numArray.reduce((sum, num) => sum + num, 0);
  }
  

  // Throw Error for Negative Numbers
  export function negativeNumbers(numbers) {
    if (numbers === "") {
      return 0;
    }
  
    let delimiter = ",";
    if (numbers.startsWith("//")) {
      delimiter = numbers[2];
      numbers = numbers.slice(4);
    }
  
    const numArray = numbers.split(new RegExp(`[${delimiter}\n]`)).map(num => parseInt(num));
    
    const negativeNumbers = numArray.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(",")}`);
    }
  
    return numArray.reduce((sum, num) => sum + num, 0);
  }
  