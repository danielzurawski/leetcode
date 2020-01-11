/*
A peak element is an element that is greater than its neighbors.

Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.

The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

You may imagine that nums[-1] = nums[n] = -∞.

Example 1:

Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  let left = 0;
  let right = nums.length-1;
  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2)
    if (nums[mid] > nums[mid+1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};


// 3,2,1
// |   |


console.log('findPeakElement([1,2,3,1])', findPeakElement([1,2,3,1]));
console.log('findPeakElement([1,2,1,3,5,6,4])', findPeakElement([1,2,1,3,5,6,4]));
console.log('findPeakElement([3,2,1])', findPeakElement([3,2,1]));
[1,2,1,3,5,6,4]
