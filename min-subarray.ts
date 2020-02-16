/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function(s: number, nums: number[]): number {
  if (!nums.length) {
    return 0;
  }
  if (nums.length == 1) {
    return nums[0] >= s ? 1 : 0;
  }
  if (nums[0] >= s) return 1;
  
  let left = 0;
  let right = 1;
  let minLength = Infinity;
  let sum = nums[0] + nums[1];
  while(right < nums.length) {
    if (sum >= s && left <= right) {
      minLength = Math.min((right - left) + 1, minLength);
      if (left < right) {
        left++;    
      }
      sum -= nums[left-1];
    } else {
      right++;
      sum += nums[right];
    }
  }
  return minLength === Infinity ? 0 : minLength; 
};

console.log('minSubArrayLen(7, [2,3,1,2,4,3])', minSubArrayLen(7, [2,3,1,2,4,3]));
console.log('minSubArrayLen(6, [10,2,3])', minSubArrayLen(6, [10,2,3]));

/*
s=6
[10,2,3]
|
  |

s = 3
[2,3,1,2,4,3] 
 |          
 |

minLength = Math.min(x, minLength)
x=(4-2)+1 = 3
x=10


*/