/* eslint-disable no-param-reassign */

/*
https://leetcode.com/problems/letter-combinations-of-a-phone-number/

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
*/

type PhoneNos = {[key: string]: string[]}
const CHARS: PhoneNos  = {
  '1': [],
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z'],
  '0': []
};

const getCharsAtKey = (key: string): string[] => {
  if (!CHARS[key]) return [];
  return CHARS[key];
}

const recurse = (
  phoneNums: string[], 
  first: number, 
  output: string,
  results: string[],
  maxLength: number
): string[] => {
  // console.log('recurse', 'output', output, 'first', first, 'results', results);
  if (output.length === maxLength) {
    results.push(output);
    return [];
  }
  
  const chars = getCharsAtKey(phoneNums[first]);
  for (let i = 0; i < chars.length; ++i) {
    output = output.concat(chars[i])
    recurse(phoneNums, first + 1, output, results, maxLength)
    output = output.slice(0, output.length - 1);
  }
  
  return results;
};

/**
* @param {string} digits
* @return {string[]}
*/
const letterCombinations = function(digits: string): string[] {
  if (!digits.length) return [];
  const phoneNums = digits.split('')
  return recurse(phoneNums, 0, '', [], phoneNums.length)
};

console.log('letterCombinations("23")', letterCombinations("23"));
