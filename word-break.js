"use strict";
/* eslint-disable no-param-reassign */
/*
Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.
Example 1:

Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
             Note that you are allowed to reuse a dictionary word.

*/
const wordBreakRecurse = (s, wordDict, left, memo) => {
    let right = left;
    if (right == s.length)
        return true;
    if (memo[left] !== undefined)
        return memo[left];
    while (right < s.length) {
        const substr = s.substring(left, right + 1);
        right++;
        if (wordDict.has(substr) && wordBreakRecurse(s, wordDict, right, memo)) {
            return memo[left] = true;
        }
    }
    return memo[left] = false;
};
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = function (s, wordDict) {
    const wordSet = new Set(wordDict);
    return wordBreakRecurse(s, wordSet, 0, []);
};
console.log('wordBreak("leetcode", ["leet", "code"])', wordBreak('leetcode', ['leet', 'code']));
console.log(' wordBreak("applepenapple", ["apple", "pen"])', wordBreak('applepenapple', ["apple", "pen"]));
console.log('wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])', wordBreak('catsandog', ["cats", "dog", "sand", "and", "cat"]));
console.log('wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])', wordBreak('catsandog', ["cats", "dog", "sand", "and", "cat"]));
console.log('wordBreak("catsanddog", ["cats", "dog", "sand", "and", "cat"])', wordBreak('catsanddog', ["cats", "dog", "sand", "and", "cat"]));
console.log('wordBreak("aaaaaaa", ["aaaa", "aaa"]) ', wordBreak('aaaaaaa', ['aaaa', 'aaa']));
// aaaaaaa
//
// [aaaa, aaa]]
