//Write a function called “getLengthOfWord”.
//Given a word, “getLengthOfWord” returns the length of the given word.

const { get } = require("http");

function getLengthOfWord(word1) {
  // your code here
  if (typeof word1 == "string") {
    return word1.length;
  }
  return -1;
}
console.log(getLengthOfWord("GUVI"));
console.log(getLengthOfWord(""));
console.log(getLengthOfWord(9));
console.log(getLengthOfWord());
