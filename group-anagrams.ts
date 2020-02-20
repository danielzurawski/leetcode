/*
Given an array of strings, group anagrams together.

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs: string[]): string[][] => {
  const anagrams: {[key: string]: string[]} = {};
  strs.forEach((str) => {
    const strArr = str.split('');
    const sorted = strArr.sort().join('');
    if (!anagrams[sorted]) {
      anagrams[sorted] = [];
    }
    anagrams[sorted].push(str);
  });
  return Object.keys(anagrams).map(key => anagrams[key]);
};

console.log(
  'groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])', 
  groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
)
console.log(
  'groupAnagrams(["hello", "loleh"])', 
  groupAnagrams(["hello", "loleh"])
)