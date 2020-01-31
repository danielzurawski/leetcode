/*
In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.

Example 1:

Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
Example 2:

Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.

*/

const getAlphabet = (order) => order.split('').reduce((acc, char, index) => ({
  ...acc,
  [char]: index
}), {});

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  const alphabet = getAlphabet(order);
  for (let w = 0; w < words.length-1; w++) {
    let wordA = words[w];
    let wordB = words[w + 1];

    let charIndex = 0;
    let leadingWord = wordA.length > wordB.length ? wordA : wordB;

    console.log('wordA', wordA, 'wordB', wordB);
    while (charIndex < leadingWord.length) {
      console.log('is wordA[charIndex]', alphabet[wordA[charIndex]])
      if (wordA[charIndex] === wordB[charIndex]) {
        charIndex++
        continue;
      } else if (alphabet[wordA[charIndex]] < alphabet[wordB[charIndex]]) {
        return true;
      }
      return false;
    }
  }
};


// console.log('getAlphabet', getAlphabet("hlabcdefgijkmnopqrstuvwxyz"));

console.log('isAlienSorted', isAlienSorted(["bc","abc"], "abcdefghijklmno"), '== false');
console.log('isAlienSorted', isAlienSorted(["abc","bc"], "abcdefghijklmno"), '== true');
console.log('isAlienSorted', isAlienSorted(["abc","ab"], "abcdefghijklmno"), '== false');

// console.log('isAlienSorted', isAlienSorted(["hello","leetcode"], "hlabcdefgijkmnopqrstuvwxyz"));
