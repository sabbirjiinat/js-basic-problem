/* Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 
Example Input: "hello world" Example Output: "dlrow olleh"
 */
function reverseString(inputString) {
  let reversedString = "";

  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
  }

  return reversedString;
}

// Test the function
const input = "Hello World";
const reversed = reverseString(input);
console.log(reversed);

/* ---------------------------------- */
/* Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 
Example Input: [2, -5, 10, -3, 7] Example Output: 19 */

const positiveNumberSum = (numberOfArray) => {
  let sum = 0;
  for (let i = 0; i < numberOfArray.length; i++) {
    if (numberOfArray[i] > 0) {
      sum += numberOfArray[i];
    }
  }
  return sum;
};

/* Test the function */
const array = [2, -5, 10, -3, 7];
const resultOfSum = positiveNumberSum(array);
console.log(resultOfSum);

/* --------------------------------------------------------- */
/* Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 
Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3 */

const findMostFrequentElement = (arr) => {
  const elementFrequency = {};

  arr.forEach((element) => {
    if (elementFrequency[element]) {
      elementFrequency[element]++;
    } else {
      elementFrequency[element] = 1;
    }
  });

  let mostFrequentElement;
  let maxFrequency = 0;
  for (const element in elementFrequency) {
    if (elementFrequency[element] > maxFrequency) {
      maxFrequency = elementFrequency[element];
      mostFrequentElement = element;
    }
  }

  return mostFrequentElement;
};

// Test the function
const arr = [1, 2, 3, 2, 4, 2, 5, 2, 6, 2];
const mostFrequent = findMostFrequentElement(arr);
console.log("The most frequent element is:", mostFrequent);

/* -------------------------------------------- */
/* 
 Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation */
const calculate = (num1, operator, num2) => {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      return "Error: Division by zero";
    } else {
      return num1 / num2;
    }
  } else {
    return "Error: Invalid operator";
  }
};

// Test the function
const num1 = 5;
const operator = "*";
const num2 = 5;
const result = calculate(num1, operator, num2);
console.log(`Result: ${result}`);

/* -------------------------------------------- */
/* Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters. */
const generateRandomPassword = (length) => {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numericChars = "0123456789";
  const specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";

  const allChars =
    uppercaseChars + lowercaseChars + numericChars + specialChars;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
};

// Test the function
const passwordLength = 12;
const randomPassword = generateRandomPassword(passwordLength);
console.log("Random Password:", randomPassword);

/* ------------------------------------------------ */
/* Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value. */

function romanToInt(roman) {
  const romanNumeralMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  let prevValue = 0;

  for (let i = roman.length - 1; i >= 0; i--) {
    const currentChar = roman[i];
    const currentValue = romanNumeralMap[currentChar];

    if (currentValue < prevValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }

    prevValue = currentValue;
  }

  return result;
}

// Test the function
const romanNumeral = "X";
const intValue = romanToInt(romanNumeral);
console.log("Integer value:", intValue);

/* ---------------------------------------- */
/* Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number. */

function findSecondSmallest(arr) {
  if (arr.length < 2) {
    throw new Error("Array must have at least two elements");
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let num of arr) {
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest && num !== smallest) {
      secondSmallest = num;
    }
  }

  if (secondSmallest === Infinity) {
    throw new Error("No second smallest element found");
  }

  return secondSmallest;
}

// Test the function
const numbers = [5, 2, 9, 1, 7, 3];
const secondSmallest = findSecondSmallest(numbers);
console.log("Second smallest element:", secondSmallest);
