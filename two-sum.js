"use strict";
/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    const allowedNums = {};
    nums.forEach((num, i) => {
        allowedNums[num] = i;
    });
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const rest = target - num;
        if (allowedNums[rest] && allowedNums[rest] != i) {
            return [i, allowedNums[rest]];
        }
    }
    return [];
};
console.log('twoSum([2, 7, 11, 15], 9)', twoSum([2, 7, 11, 15], 9));
console.log('twoSum([6, 2, 7, 10, 12], 9)', twoSum([6, 2, 7, 10, 12], 9));
console.log('twoSum([1,3,4,2], 6)', twoSum([1, 3, 4, 2], 6));
console.log('twoSum([3,3], 6)', twoSum([3, 3], 6));
// 6 - 1 = 5 ? false
// 6 - 3 = 3 ? true && not 3 -> false
// 6 - 4 = 2 ? true
// [3,3], target=6
