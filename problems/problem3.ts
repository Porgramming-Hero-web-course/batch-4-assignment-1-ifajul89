// Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

const countWordOccurrences = (sentence: string, word: string): number => {
  const splitSentence = sentence.toLocaleLowerCase().split(" ");
  let wordCount = 0;
  for (let wordOfSentence of splitSentence) {
    if (wordOfSentence === word.toLocaleLowerCase()) {
      wordCount++;
    }
  }
  return wordCount;
};