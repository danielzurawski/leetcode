
// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). 
// n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). 
// Find two lines, which together with x-axis forms a container, such that the container contains the most water.

// Note: You may not slant the container and n is at least 2.

// Input: [1,8,6,2,5,4,8,3,7]
// Output: 49


var maxArea = function(height) {
    let mostWaterArea = -Infinity
    let l = 0;
    let r = height.length - 1;
    let width = height.length - 1;
    while (width > 0) {
        let area = Math.min(height[l], height[r]) * width
        mostWaterArea = Math.max(mostWaterArea, area)
        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
        width--;
    }

    return mostWaterArea;
};

console.log('expect 49', maxArea([1,8,6,2,5,4,8,3,7]))
console.log('expect 4', maxArea([4,3,2,1]))

console.log('expect 4', maxArea([1,2,3,4]))
console.log('expect 2', maxArea([1,2,1]))
console.log('expect 5', maxArea([1,1,1,1,2,1])) // 4 * 1 = 4, 1 x 5 = 5