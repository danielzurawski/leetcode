// Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.

// Note that the row index starts from 0.

// Input: 3
// Output: [1,3,3,1]

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let triangle = [];
  for (let i = 0; i < rowIndex+1; i++) {
    if (!triangle[i]) triangle.push([])
    for (let j = 0; j <= i; j++) {
      if (i === 0 || j === 0) {
        triangle[i][j] = 1;
      } else {
        triangle[i][j] = triangle[i-1][j-1] + (triangle[i-1][j] || 0)
      }
    }
  }
  return triangle[rowIndex];
};

// Additional constraint - O(k) space https://www.youtube.com/watch?v=tTYU4PAiqOE&feature=youtu.be

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let row = [];
  row.push(1)
  for (let i = 1; i <= rowIndex; i++) {
    for(let j = row.length - 1; j > 0; j--) {
      row[j] = row[j-1] + row[j];
    }
    row.push(1);
  }
  return row;
};

console.log('get row for index 3', getRow(3))
