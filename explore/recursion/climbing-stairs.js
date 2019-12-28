/*
You are climbing a stair case. It takes n steps to reach to the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

  Input: 2
  Output: 2
  Explanation: There are two ways to climb to the top.
  1. 1 step + 1 step
  2. 2 steps

*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  return climbStairsDynamicProgramming(n);
};

// Steps: 2
// 1 + 1
// 2

// Steps: 3
// 1 + 1 + 1
// 2 + 1
// 1 + 2

// Steps: 4
// 1 + 1 + 1 + 1
// 2 + 2
// 1 + 2 + 1
// 2 + 1 + 1
// 1 + 1 + 2

// climbStairs(i, n) = climbStairs(i + 1, n) + climbStairs(i + 2, n)
const climbStairsBruteForceHelper = (i, n) => {
  if (i > n) return 0;
  if (i == n) return 1;

  return climbStairsBruteForceHelper(i + 1, n) + climbStairsBruteForceHelper(i + 2, n)
}

const climbStairsBruteForce = (n) => {
  return climbStairsBruteForceHelper(0, n);
};
console.log('climbStairsBruteForce(2)', climbStairsBruteForce(2))
console.log('climbStairsBruteForce(3)', climbStairsBruteForce(3))
console.log('climbStairsBruteForce(4)', climbStairsBruteForce(4))

const climbStairsBruteForceHelperMemoized = (i, n, memo) => {
  if (i > n) return 0;
  if (i == n) return 1;

  if (memo[i]) return memo[i]

  memo[i] = climbStairsBruteForceHelperMemoized(i + 1, n, memo) + climbStairsBruteForceHelperMemoized(i + 2, n, memo)
  return memo[i]
}

const climbStairsBruteForceMemoized = (n) => {
  const memo = {};
  return climbStairsBruteForceHelperMemoized(0, n, memo);
};

console.log('climbStairsBruteForceMemoized(4)', climbStairsBruteForceMemoized(4))
console.log('climbStairsBruteForceMemoized(10)', climbStairsBruteForceMemoized(10))

// dp[3] = dp[3 - 1] + dp[3 - 2] = 2 + 1 , dp[3] = 3
// dp[4] = dp[4 - 1] + dp[4 - 2] = dp[3] + dp[2] = 3 + 2 = 5
// dp[5] = dp[5 - 1] + dp[5 - 2] = dp[4] + dp[3] = 5 + 3 = 8

const climbStairsDynamicProgramming = (n) => {
  const dp = { 1: 1, 2: 2};
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

console.log('climbStairsDynamicProgramming(3)', climbStairsDynamicProgramming(3))
console.log('climbStairsDynamicProgramming(4)', climbStairsDynamicProgramming(4))
console.log('climbStairsDynamicProgramming(5)', climbStairsDynamicProgramming(5))
console.log('climbStairsDynamicProgramming(10)', climbStairsDynamicProgramming(10))

/*
1 step = 1 way
1

2 steps = 2 ways
1 + 1
2

3 steps = 3 ways
1 + 1 + 1
2 + 1

1 + 2




3 steps = 3 ways
1 + 1 + 1
2 + 1
1 + 2
----
4 steps = 5 ways
1 + 1 + 1 + 1        // the same
1 + 1 + 2            // the same
2 + 1 + 1            // the same
1 + 2 + 1            // new
2 + 2                // new
----
5 steps = 7 ways
1 + 1 + 1 + 1 + 1    // the same
2 + 1 + 1 + 1        // the same
1 + 2 + 1 + 1        // the same
1 + 1 + 2 + 1        // the same
1 + 1 + 1 + 2        // new
2 + 2 + 1            // new
1 + 2 + 2            // new
----
6 steps = 10 ways
1 + 1 + 1 + 1 + 1 + 1
2 + 1 + 1 + 1 + 1
1 + 2 + 1 + 1 + 1
1 + 1 + 2 + 1 + 1
1 + 1 + 1 + 2 + 1
1 + 1 + 1 + 1 + 2
2 + 2 + 1 + 1
2 + 1 + 2 + 1
2 + 1 + 1 + 2
2 + 2 + 2
*/
