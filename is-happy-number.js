"use strict";
/*
Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example:

Input: 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
*/
/* eslint-disable no-param-reassign */
/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = (n) => {
    let sumStr = n.toString();
    const seen = {};
    while (sumStr != '1' && !seen[sumStr]) {
        const chars = sumStr.split('');
        const result = chars.reduce((acc, i) => {
            acc += Math.pow(Number(i), 2);
            return acc;
        }, 0);
        seen[sumStr] = true;
        sumStr = result.toString();
    }
    return sumStr === '1';
};
console.log('isHappy(19)', isHappy(19));
