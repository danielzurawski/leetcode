"use strict";
/* eslint-disable no-param-reassign */
const CHARS = {
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
const getCharsAtKey = (key) => {
    if (!CHARS[key])
        return [];
    return CHARS[key];
};
const recurse = (phoneNums, first, output, results, maxLength) => {
    // console.log('recurse', 'output', output, 'first', first, 'results', results);
    if (output.length === maxLength) {
        results.push(output);
        return [];
    }
    const chars = getCharsAtKey(phoneNums[first]);
    for (let i = 0; i < chars.length; ++i) {
        output = output.concat(chars[i]);
        recurse(phoneNums, first + 1, output, results, maxLength);
        output = output.slice(0, output.length - 1);
    }
    return results;
};
/**
* @param {string} digits
* @return {string[]}
*/
const letterCombinations = function (digits) {
    if (!digits.length)
        return [];
    const phoneNums = digits.split('');
    return recurse(phoneNums, 0, '', [], phoneNums.length);
};
console.log('letterCombinations("23")', letterCombinations("23"));
