/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArraySlow = function(nums) {
    let maxSum = -Infinity;
    for(let i = 0; i < nums.length; i++) {
        let sum = nums[i];
        maxSum = Math.max(sum, maxSum)
        for(let j = i + 1; j < nums.length; j++) {
            sum += nums[j];
            maxSum = Math.max(sum, maxSum);
        }
    }
    return maxSum;
};

var maxSubArray = function(nums) {
    if (!nums.length) return 0;
    let maxSum = nums[0];  // -2
    let sum = nums[0];     // -2, 1, -2, 4, 3, 5, 6, 1, 5
    for(let i = 1; i < nums.length; i++) {
        sum = Math.max(nums[i], nums[i] + sum) // Math.max(4, 4 + 1), 5
        if (sum > maxSum) {
            maxSum = sum; // 1, 4, 5, 6
        }
    }
    return maxSum;
};
// [-2,1,-3,4,-1,2,1,-5,4],
//    -1,-4,

console.log('maxSubArray([-2,1,-3,4,-1,2,1,-5,4])', maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
