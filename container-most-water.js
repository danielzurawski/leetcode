
// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). 
// n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). 
// Find two lines, which together with x-axis forms a container, such that the container contains the most water.

// Note: You may not slant the container and n is at least 2.

// Input: [1,8,6,2,5,4,8,3,7]
// Output: 49


var maxArea = function(height) {
    let tallest = -Infinity;
    let tallestIndex = -1;
    for(let i = 0; i < height.length; i++) {
        if (height[i] > tallest) {
            tallest = height[i];
            tallestIndex = i;
        }
    }
    // console.log('tallestIndex', tallestIndex, tallest);
    
    let mostWaterArea = -Infinity
    for (let j = height.length - 1; j >= 0; j--) {
        let area = Math.min(tallest, height[j]) * Math.abs(j - tallestIndex)
        // console.log('area', area)
        if (area > mostWaterArea) {
            mostWaterArea = area;
        }
    }

    return mostWaterArea;
};

console.log('expect 49', maxArea([1,8,6,2,5,4,8,3,7]))
console.log('expect 4', maxArea([4,3,2,1]))

console.log('expect 4', maxArea([1,2,3,4]))