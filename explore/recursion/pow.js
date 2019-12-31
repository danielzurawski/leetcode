/*
Implement pow(x, n), which calculates x raised to the power n (xn).

Example 1:
Input: 2.00000, 10
Output: 1024.00000

Example 3:
Input: 2.00000, -2
Output: 0.25000
Explanation: 2^-2 = 1/2^2 = 1/4 = 0.25

*/

// 2^1 = 2 * 1
// if (n <= 1) return acc;
// powHelper(acc * x, x, n - 1)
// 2^2 = powHelper(2 * 2, 2, 2 - 1) = return 4 * 1
// 2^3 = powHelper(2 * 2, 2, 3 - 1) => pow(4 * 2, 2, 2 - 1) => return 8;

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n === 1) return x;
  if (n === 0) {
    if (x < 0) {
      return -1;
    }
    return 1;
  }
  if (n < 0) {
    return (1/powHelperExponentiation(x, Math.abs(n)))
  }
  return powHelperExponentiation(x, n)
};

// V8 does not support tail call optimisation, maximum stack size exceeded
const powHelper = (acc, x, n) => {
  if (n <= 1) return acc;
  return powHelper(acc * x, x, n - 1);
}

// O(exponent * n)
const powHelperIterBrute = (x, n) => {
  let acc = x;
  for (let i = 2; i <= n; i++) {
    acc *= x; // continously multiply by two
  }
  return acc;
}

// 10 in binary ->
                //  8x2x
                //  1010 -> so 2^10 will multiply product twice?
// 13 in binary ->  84x1
                    1101


// Uses exponentiation by squaring to calculate product, to run faster
// O(log(exponent))
const powHelperExponentiation = (x, n) => {
  let base = x;
  let exponent = n;
  let product = 1;
  while (exponent > 0) {
    // if the binary digit of exponent is 1, then multiply product by base
    if (exponent & 1 === 1) {
      // console.log('exponent is 1 at this bit');
      product *= base;
    }

    // else continously square it (multiply by itself, up to the last exponent)
    base *= base;
    exponent /= 2;
  }

  return product;
}


// console.log('myPow(2,1)', myPow(2, 1));
// console.log('myPow(2,2)', myPow(2, 2));
// console.log('myPow(2,3)', myPow(2, 3));
// console.log('myPow(2,10)', myPow(2, 10));
console.log('myPow(2,13)', myPow(2, 13));
// console.log('myPow(2,-2)', myPow(2, -2));
// console.log('myPow(2,-10)', myPow(2, -10));
// console.log('myPow(0.44528,0)', myPow(0.44528, 0))
// console.log('myPow(-0.44528,0)', myPow(-0.44528, 0))
// console.log('myPow(1.00001,123456)', myPow(1.00001, 123456))
// console.log('myPow(2.0000, -2147483648)', myPow(2.0000, -2147483648))

