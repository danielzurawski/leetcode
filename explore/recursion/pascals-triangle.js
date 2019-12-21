/*
Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/

/*

Base case:
f(i,j) = 1 where j = 1 or j = i

Recurrence relation:
f(i,j) = f(i−1,j−1) + f(i−1,j)

*/


// []
// [[]]
/*
[
    [1],
    [1,1]
]

*/


/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let triangle = [];
  for (let i = 0; i < numRows; i++) {
    if (!triangle[i]) triangle.push([])
    for (let j = 0; j <= i; j++) {
      if (i === 0 || j === 0) {
        triangle[i][j] = 1;
      } else {
        triangle[i][j] = triangle[i-1][j-1] + (triangle[i-1][j] || 0)
      }
    }
  }
  return triangle;
};

/*
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
*/

console.log('generate\n', generate(5));
