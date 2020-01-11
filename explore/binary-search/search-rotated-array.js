/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
*/

// 4,5,6,7,0,1,2

// 3,4,5,6,7,8,9,0,1,2
// L       |         R
//         L   |     R

// Find i + 1 where arr[i] > arr[i + 1]

const findPivot = (nums) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2)
    if (nums[mid] > nums[mid+1]) {
      return mid + 1;
    } else if (nums[mid] > nums[right]) {
      left = mid;
    } else if (nums[mid] < nums[left]) {
      right = mid;
    } else {
      return -1;
    }
  }
}

const binarySearch = (left, right, nums, target) => {
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2)
    // console.log('mid', mid);
    if (target === nums[mid]) {
      return mid;
    } else if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  const pivot = findPivot(nums);

  if (pivot === -1) {
    return binarySearch(0, nums.length - 1, nums, target);
  } else if (nums[pivot] === target) {
    return pivot;
  } else if (target < nums[0] ) {
    return binarySearch(pivot, nums.length - 1, nums, target)
  } else if (target == nums[0]) {
    return 0;
  }
  return binarySearch(0, pivot, nums, target);
};

// Improved, single pass solution

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2)
    if (target == nums[mid]) {
      return mid;
    } else if (nums[mid] >= nums[left]) {
      if (target >= nums[left] && target < nums[mid]) right = mid - 1;
      else {
        left = mid + 1;
      }
    } else {
      if (target <= nums[right] && target > nums[mid]) left = mid + 1;
      else {
        right = mid - 1;
      }
    }
  }
  return -1;
};

// console.log('pivot index', findPivot([9,6,7,8]))
// console.log('pivot index', findPivot([7,8,9,6]))
// console.log('pivot index', findPivot([4,5,6,7,0,1,2,3]))
// console.log('pivot index', findPivot([6,0,1,2,3,4,5]))
// console.log('pivot index', findPivot([0,1,2,3,4,5]))


// console.log('binary search', binarySearch(undefined, undefined, [0,1,2,3,4,5], 5))

// console.log('search', search([7,8,9,6], 7))
console.log('search', search([4,5,6,7,0,1,2,3], 2))
// console.log('search', search([1,3], 3))
// console.log('search', search([1], 1))


console.log('search', search([6,7,8,1,2,3,4,5], 6))
