// Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

const countWordOccurrences = (sentence: string, word: string): number => {
  const splitSentence = sentence.toLocaleLowerCase().split(" ");

  console.log(splitSentence)
  let wordCount = 0;
  for (let word of splitSentence){
    if(word === word.toLocaleLowerCase()){
      word++
    }
  }
}

// Sample Input:
countWordOccurrences("I love typescript", "typescript");

// Sample Output:
// 1;