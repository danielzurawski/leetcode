/*
https://leetcode.com/problems/longest-substring-without-repeating-characters/

Given a string, find the length of the longest substring without repeating characters.

Example 3:

Input: "pwwkew"
Output: 3
Explanation:
  The answer is "wke", with the length of 3.
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let left = 0, right = 0;
  let strArr = s.split('');
  const chars = {};
  let longestSubstring = 0;

  while (right < strArr.length) {
    if (!chars[strArr[right]]) {
      chars[strArr[right]] = true
      right++;
    } else {
      delete chars[strArr[left]];
      left++
    }
    longestSubstring = Math.max(right - left, longestSubstring);
  }
  // console.log('left', left, 'right', right);
  return longestSubstring;
};
console.log('lengthOfLongestSubstring(pwwkew)', lengthOfLongestSubstring('pwwkew'))
console.log('lengthOfLongestSubstring(abcbbefh)', lengthOfLongestSubstring('abcbbefh'))
console.log('lengthOfLongestSubstring(abcdefh)', lengthOfLongestSubstring('abcdefh'))
console.log('lengthOfLongestSubstring(ab)', lengthOfLongestSubstring('ab'))
console.log('lengthOfLongestSubstring(bbbbb)', lengthOfLongestSubstring('bbbb'))
console.log('lengthOfLongestSubstring(abcabcbb)', lengthOfLongestSubstring('abcabcbb'))
console.log('lengthOfLongestSubstring(dvdf)', lengthOfLongestSubstring('dvdf'))
//  pwwkew
//l  |
//r   |


//   dvdf
//l   |
//r      |    -> 4 - 1 = 3
/*
chars
{
  d
  v,
  f
}
longest = 3
*/

//   abcbbefh
//l     |
//r     |

/*
chars
{
  a,
  b,
  c
}
longest = 3
*/

/* chars
{
  // p,
  w,
  k,
  e
}
longest = 2
*/
