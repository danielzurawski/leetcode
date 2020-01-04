  /*
On the first row, we write a 0.
Now in every subsequent row, we look at the previous row
and replace each occurrence of 0 with 01, and each occurrence of 1 with 10.

Given row N and index K, return the K-th indexed symbol in row N.
 (The values of K are 1-indexed.) (1 indexed).

Examples:
Input: N = 1, K = 1
Output: 0

Input: N = 2, K = 1
Output: 0

Input: N = 2, K = 2
Output: 1

Input: N = 4, K = 5
Output: 1

Explanation:
row 1: 0
row 2: 01
row 3: 0110
row 4: 01101001

Hint #1: Try to represent the current (N, K) in terms of some (N-1, prevK). What is prevK ?

*/

/*
0 => 01
01 => 0110
0110 => 01101001
01101001 => 0110100110010110
0110100110010110
*/

// convert = { 0: 01, 1: 10 }
// blah => str[0] + ',' + convert[str[0]]
// blah[0] + generate()

/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */

 const replacements = {
    0: [0,1],
    1 : [1,0]
  };

var kthGrammar = function(N, K) {
  const rows = [
    ['0']
  ];

  for(let row = 1; row <= N; row++) {
    for(let col = 0; col < rows[row-1].length; col++) {
      if (!rows[row]) rows[row] = [];
      rows[row].push(...replacements[rows[row-1][col]]);
    }
  }

  console.log('rows', rows, 'N', N, 'K', K)
  return rows[N][K-1];
};


// Space complexity: O(n*k), time complexity: O(n*k)

console.log('kthGrammar(1, 1)', kthGrammar(1, 1));
console.log('kthGrammar(2, 1)', kthGrammar(2, 1));
console.log('kthGrammar(4, 5)', kthGrammar(4, 5));
console.log('kthGrammar(8, 5)', kthGrammar(8, 5));

