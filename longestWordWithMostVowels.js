function longestWordWithMostVowels(sentence) {
  const words = sentence.match(/[a-z]+/gi);

  if (words === null) return "";
  let longestWord = "";
  let maxVowels = 0;
  for (const word of words) {
    if (word.length > longestWord.length) {
      const vowels = word.match(/[aeiou]/gi);
      if (vowels && vowels.length > maxVowels) {
        longestWord = word;
        maxVowels = vowels.length;
      }
    }
  }
  return longestWord;
}

const inputSentence =
  "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers (Socrates)";

const result = longestWordWithMostVowels(inputSentence);
// Output: "experience"
console.log(
  `Result: "${result}" => Expected output: "experience", Actual output: "${longestWordWithMostVowels(
    result,
  )}"\n`,
);

// Test with a sentence containing only one word.
const test1Input = "hello";
console.log(
  `Test 1: "${test1Input}" => Expected output: "hello", Actual output: "${longestWordWithMostVowels(
    test1Input,
  )}"\n`,
);

// Test with a sentence containing multiple words of the same length and same number of vowels.
const test2Input = "the quick brown fox jumps over the lazy dog";
console.log(
  `Test 2: "${test2Input}" => Expected output: "quick", Actual output: "${longestWordWithMostVowels(
    test2Input,
  )}"\n`,
);

// Test with a sentence containing multiple words of the same length and different number of vowels.
const test3Input =
  "the quick brown fox jumps over the lazy dog and the crazy cat";
console.log(
  `Test 3: "${test3Input}" => Expected output: "quick", Actual output: "${longestWordWithMostVowels(
    test3Input,
  )}"\n`,
);

// Test with a sentence containing special characters and numbers.
const test4Input = "the quick brown fox jumps over the 123 lazy dogs!!!";
console.log(
  `Test 4: "${test4Input}" => Expected output: "quick", Actual output: "${longestWordWithMostVowels(
    test4Input,
  )}"\n`,
);

// Test with an empty string.
const test5Input = "";
console.log(
  `Test 5: "${test5Input}" => Expected output: "", Actual output: "${longestWordWithMostVowels(
    test5Input,
  )}"`,
);
