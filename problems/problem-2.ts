// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

const removeDuplicates = (numArray: number[]): number[] => {
  const result: number[] = [];
  for (let number of numArray) {
    if (!result.includes(number)) {
      result.push(number);
    }
  }
  return result;
};