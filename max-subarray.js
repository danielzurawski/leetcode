/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
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
