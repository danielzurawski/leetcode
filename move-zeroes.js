/*
https://leetcode.com/problems/move-zeroes/

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  const n = nums.length;
  if (n < 2) return;
  let left = 0;
  let right = 0;
  while (right < n) {
    if (nums[left] == nums[right]) {
      right++;
      continue;
    }
    if (nums[right] == 0) {
      right++;
    }
    if (nums[left] == 0 && nums[right] != 0) {
      let temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
    }
    left++;
  }
};

var moveZeroes = function(nums) {
  let i = 0;
  let lastFoundZero = 0;
  while (i < nums.length) {
    if (nums[i] != 0) {
      [nums[i], nums[lastFoundZero++]] = [nums[lastFoundZero], nums[i]];
    }
    i++;
  }
}

const a = [0,1,0,3,12]
moveZeroes(a)
console.log('moveZeroes([0,1,0,3,12])', a);

const b = [1,2,0,4,0,6]
moveZeroes(b)
console.log('moveZeroes([1,2,0,4,0,6])', b);

const c = [1,0]
moveZeroes(c)
console.log('moveZeroes([1,0])', c);

const d = [0]
moveZeroes(d)
console.log('moveZeroes([0])', d);

const e = [1]
moveZeroes(e)
console.log('moveZeroes([1])', e);

const f = [0,1,2,3,4,5,6]
moveZeroes(f)
console.log('moveZeroes([0, 1,2,3,4,5,6])', f);

const g = [0, 1]
moveZeroes(g)
console.log('moveZeroes([0, 1])', g);


/*
[0, 1]
 |
    |
[1, 0]
    |
    |

*/

/*
[1,2,0,4,0,6]
     |
       |
[1,2,4,0,0,6]
       |
           |
[1,2,4,6,0,0]
         |
             |
*/

// [1,2,3,4,5,6]
//          |
//            |

/*
[0,1,0,3,12]
 |
   |
[1,0,0,3,12]
   |
       |
[1,3,0,0,12]
     |
         |

[1,3,12,0,0]
     |
          |
*/


