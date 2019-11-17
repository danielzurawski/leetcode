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
    let maxSum = nums[0];
    let sum = nums[0];
    for(let i = 1; i < nums.length; i++) {
        sum = Math.max(nums[i], nums[i] + sum)
        if (sum > maxSum) {
            maxSum = sum;
        }
    }
    return maxSum;
};
// [-2,1,-3,4,-1,2,1,-5,4],
