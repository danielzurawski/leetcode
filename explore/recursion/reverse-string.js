/*
Write a function that reverses a string. The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.

Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  const newStr = [];

  for (let i = s.length - 1; i >= 0; i--) {
    newStr.push(s[i]);
  }

  return newStr;
};

// 4 - 0 = 4
// 4 - 1 = 3
// 4 - 2 = 2

// ---- In-place

// With additional constraint of O(1) space - in-place
var reverseStringInPlace = function(s) {
  const lengthMinusOne = s.length - 1;
  for (let i = 0; i < lengthMinusOne / 2; i++) {
    [s[i], s[lengthMinusOne - i]] = [s[lengthMinusOne - i], s[i]];
  }
};

// ---- Recursive

const helper = (s, i, maxLength) => {
  if (i >= maxLength / 2) return;
  [s[i], s[maxLength - i]] = [s[maxLength - i], s[i]]
  helper(s, ++i, maxLength)
}

// With additional constraint of O(1) space - in-place, recursive
var reverseStringInPlaceRecursive = function(s) {
  const j = s.length - 1;
  helper(s, 0, j)
};

console.log('reverseStringInPlace should be ["o","l","l","e","h"]', reverseString(["h","e","l","l","o"]))

let orig = ["H","a","n","n","a","h"];
reverseStringInPlace(orig)
console.log('should be ["h","a","n","n","a","H"]', orig)

let orig2 = ["H","a","n","n","a","h"];
reverseStringInPlaceRecursive(orig2)
console.log('reverseStringInPlaceRecursive should be ["h","a","n","n","a","H"]', orig2)

let orig3 = ["h","e","l","l","o"];
reverseStringInPlaceRecursive(orig3)
console.log('reverseStringInPlaceRecursive should be ["o","l","l","e","h"]', orig3)

