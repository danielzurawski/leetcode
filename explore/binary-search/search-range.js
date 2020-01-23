/*
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
*/

const findStart = (nums, mid, target) => {
  let i = mid;
  while (nums[i] == target && nums[i - 1] == target) {
    i--;
  }
  return i;
}

const findStop = (nums, mid, target) => {
  let j = mid;
  while (nums[j] == target && nums[j + 1] == target) {
    j++;
  }
  return j;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 /*
  O(log n + n) = n?
 */
var searchRange = function(nums, target) {
  let left = 0;
  right = nums.length - 1;
  while (left + 1 < right) {
    let mid = Math.floor(left + (right - left) / 2)
    if (nums[mid] == target) {
      const startIndex = findStart(nums, mid, target);
      const stopIndex = findStop(nums, mid, target);
      return [startIndex, stopIndex];
    } else if (nums[mid] < target) {
      left = mid;
    } else {
      right = mid
    }
  }

  if (nums[left] === target) {
    if (nums[right] === target) {
      return [left, right];
    }
    return [left, left];
  }
  if (nums[right] === target) {
    return [right, right];
  }
  return [-1, -1];
};


console.log('searchRange([5,7,8,8,8,10], 8)', searchRange([5,7,8,8,8,10], 8))
console.log('searchRange([5,7,7,8,8,10], 8)', searchRange([5,7,7,8,8,10], 8))
console.log('searchRange([5,7,7,8,10], 8)', searchRange([5,7,7,8,10], 8))
// console.log('searchRange([5,7,7,8,8,10], 6)', searchRange([5,7,7,8,8,10], 6))
console.log('searchRange([1], 1)', searchRange([1], 1))
console.log('searchRange([1,3], 1)', searchRange([1,3], 1))
console.log('searchRange([1,4], 4)', searchRange([1,4], 4))
console.log('searchRange([1,1], 1)', searchRange([1,1], 1))
console.log('searchRange([0], 1)', searchRange([0], 1))
console.log('searchRange([3,3,3], 3)', searchRange([3,3,3], 3))
console.log('searchRange([1,1,2,2,2,2,2,3,3,3,3,3,4,4,5,6], 2)', searchRange([1,1,2,2,2,2,2,3,3,3,3,3,4,4,5,6], 2))

// console.log('findStart', findStart([1,1,2,2,2,2,2,3,3,3,3,3,4,4,5,6], 6, 2))
// console.log('findStop', findStop([1,1,2,2,2,2,2,3,3,3,3,3,4,4,5,6], 4, 2))
