/*Given a string, find the length of the longest substring T that contains at most k distinct characters.

Example 1:

Input: s = "eceba", k = 2
Output: 3
Explanation: T is "ece" which its length is 3.

----------
Example 2:

Input: s = "aa", k = 1
Output: 2
Explanation: T is "aa" which its length is 2.

https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/solution/

*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
  const n = s.length;
  let left = 0;
  let right = 0;
  let maxSoFar = 0;
  let countMap = {};
  let keyCount = 0;

  if (k * n === 0) return 0;
  while (right < n) {
    let char = s[right];
    if (!countMap[char]) {
      keyCount += 1;
      countMap[char] = 1;
    } else {
      countMap[char] += 1;
    }

    if (keyCount > k) {
      left += 1;
      countMap[char] -= 1;
      if (countMap[char] <= 0) delete countMap[char];
    }

    maxSoFar = Math.max(maxSoFar, (right - left)+1);
    right += 1;
  }
  return maxSoFar;
};

"bacc", 2 == 3

/*
{
  b,
  a,
  c
}
keyCount = 3
maxSoFar = 1
*/

console.log('lengthOfLongestSubstringKDistinct("eceba", 2) = 3?', lengthOfLongestSubstringKDistinct("eceba", 2));
console.log('lengthOfLongestSubstringKDistinct("a", 0) = 0?', lengthOfLongestSubstringKDistinct("a", 0));
console.log('lengthOfLongestSubstringKDistinct("aa", 1) = 2?', lengthOfLongestSubstringKDistinct("aa", 1));
console.log('lengthOfLongestSubstringKDistinct("ab", 1) = 1?', lengthOfLongestSubstringKDistinct("ab", 1));

console.log('lengthOfLongestSubstringKDistinct("bacc", 2) = 3?', lengthOfLongestSubstringKDistinct("bacc", 2));
