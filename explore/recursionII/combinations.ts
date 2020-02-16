/*

Backtracking

Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

Example:

Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
*/


// n=1 -> 1, 2, 3, 4
// k=2 [[1,2], [2,1]]

/* 
1st step

// base case
j == n
return j;

const answer = []

iterate from start to n
  answer.push(i)
  for each, recurse with start=i + i
  answer.pop

1+2 <- in steps of 2
1+3 <- recurse j + 1?
1+4 <- recurse j + 1
2+3 <- 4 == n, increment i and return
2+4 <- 
3+4

*/


/*
first   |  pair   | answers
1         []        []

first   |  pair   | answers
2         [1]        []

first   |  pair   | answers
3         [1,2]        []

first   |  pair   | answers
3         [1,3]        [[1,2]]

*/

const combinationsRecurse = (n: number, k: number, pair: number[], first: number, answers: number[][]): void => {
  if (pair.length == k) {
    answers.push(pair);
    return;
  }
  while (first <= n) {
    console.log('first', first)
    // console.log('first', first, 'will pass', [...pair, first])
    // eslint-disable-next-line no-param-reassign
    combinationsRecurse(n, k, [...pair, first], ++first, answers);
  }
};

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function(n: number, k: number): number[][] {
  const results: number[][] = [];
  combinationsRecurse(n, k, [], 1, results)
  return results;
};

console.log('combine(4, 2)', combine(4, 2));