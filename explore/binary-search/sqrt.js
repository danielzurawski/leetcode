/*
Implement int sqrt(int x).

Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.
*/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let left = 1;
  let right = x;

  while (left <= x) {
    let mid = (left + right) / 2;

    // 2.83 * 2.83
    const result = mid * mid;

    if (Math.trunc(result) === x) {
      return Math.trunc(mid);
    } else if (result > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return x;
};

// sqrt(8) = ~ 2.83 * 2.83
// 8 / 2 = 4, 4*4=16
// 4 / 2 = 2, 2*2=4
//

console.log('mySqrt(1)', mySqrt(1));
console.log('mySqrt(4)', mySqrt(4));
console.log('mySqrt(8)', mySqrt(8));
console.log('mySqrt(25)', mySqrt(25));
console.log('mySqrt(120)', mySqrt(120));
