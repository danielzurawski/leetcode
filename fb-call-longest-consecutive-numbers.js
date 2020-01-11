// Longest consecutive increasing numbers
// Input: [1, 2, 3, 4, 5, 3, 6], skippable = 1;

var longestConsecutiveNums1 = (arr, k) => {
  debugger;
  let left = 0, right = 0;
  let data = { len: 0, skip: k, max: 0 };
  let maxSoFar = 0;

  while (right < arr.length) {
    if (arr[right] > data.max) {
      data.len++;
      data.max = arr[right];
      right++;
    } else if (data.skip > 0) {
      data.skip--;
      right++;
    } else if (left < right) {
      left++
    } else {
      data.skip = k;
      data.len = 0;
      data.max = 0;
      right++;
      maxSoFar = Math.max(maxSoFar, data.len);
    }
  }
  return Math.max(data.len, maxSoFar);
};

console.log('should be 4', longestConsecutiveNums1([100, 1000, 500, 1500, 5000], 1));
console.log('should be 6', longestConsecutiveNums1([1, 2, 3, 5, 6, 7], 1));

// [1, 2, 3, 4, 5, 3, 6]

// Input: [100, 1000, 500, 1500, 5000], skippable = 1
// Output: 4