// 1. Return the length of each string in the array
const words = ["apple", "banana", "kiwi", "orange", "grape"];
const lengths = words.map((word) => word.length);
console.log(lengths);

// 2. Square each number
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num ** 2);
console.log(squaredNumbers);

// 3. Convert each string to uppercase
const fruits = ["apple", "banana", "kiwi", "orange", "grape"];
const upperCaseFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(upperCaseFruits);

// 4. Calculate the square root of each number
const nums = [4, 9, 16, 25, 36];
const squareRoots = nums.map((num) => Math.sqrt(num));
console.log(squareRoots);

// 5. Add a prefix to each string
const prefixFruits = ["apple", "banana", "kiwi", "orange", "grape"];
const prefixedFruits = prefixFruits.map((fruit) => `fruit-${fruit}`);
console.log(prefixedFruits);

// 6. Add 10 to each number
const numbersArray = [1, 2, 3, 4, 5];
const plusTen = numbersArray.map((num) => num + 10);
console.log(plusTen);

// 7. Add the square of each number to that number
const numsArray = [1, 2, 3, 4, 5];
const squaredSum = numsArray.map((num) => num + num ** 2);
console.log(squaredSum);

// 8. Convert each number to its absolute value
const numsArr = [-5, 3, -8, 12, -1, 6];
const absoluteValues = numsArr.map((num) => Math.abs(num));
console.log(absoluteValues);

// 9. Append "!" to each element
const phrases = ["Hello", "How are you", "Goodbye"];
const exclamations = phrases.map((phrase) => `${phrase}!`);
console.log(exclamations);

// 10. Capitalize the third letter of each word
const wordsArray = ["apple", "banana", "kiwi", "orange", "grape"];
const capitalizedThirdLetter = wordsArray.map((word) =>
  word.length >= 3
    ? word.slice(0, 2) + word[2].toUpperCase() + word.slice(3)
    : word
);
console.log(capitalizedThirdLetter);
