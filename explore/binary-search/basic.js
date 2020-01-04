/*
Given a sorted (in ascending order) integer array nums of n elements
and a target value, write a function to search target in nums.

If target exists, then return its index, otherwise return -1.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (!nums.length) return -1;

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) {
      return mid;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
};

console.log('search [-1,0,3,5,9,12], target = 9', search([-1,0,3,5,9,12], 9))
console.log('search [], target = 9', search([], 9))
