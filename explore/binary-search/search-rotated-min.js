/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

Find the minimum element.

You may assume no duplicate exists in the array.

Example 1:

Input: [3,4,5,1,2]
Output: 1

Example 2:

Input: [4,5,6,7,0,1,2]
Output: 0
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let left = 0;
  let right = nums.length - 1;

  if (nums[left] < nums[right]) return nums[left];

  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2)
    if (nums[mid] > nums[mid+1]) {
      return nums[mid + 1];
    } else if (nums[mid - 1] > nums[mid]){
      return nums[mid];
    } else if (nums[left] < nums[mid]) {
      left = mid;
    } else {
      right = mid;
    }
  }
  return nums[left];
};


console.log('findMin([1])', findMin([1]));
console.log('findMin([1, 2])', findMin([1, 2]));
console.log('findMin([1, 2, 3])', findMin([1, 2, 3]));
console.log('findMin([2, 1])', findMin([2, 1]));
console.log('findMin([6, 7, 8, 5])', findMin([6, 7, 8, 5]));
console.log('findMin([3,4,5,1,2])', findMin([3,4,5,1,2]));
console.log('findMin([4,5,6,7,0,1,2])', findMin([4,5,6,7,0,1,2]));
