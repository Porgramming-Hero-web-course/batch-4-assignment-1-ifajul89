// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

const sumArray = (numArray: number[]): number => {
  let sum: number = 0;
  for (let number of numArray) {
    sum += number;
  }
  return sum;
};