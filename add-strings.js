/*
https://leetcode.com/problems/add-strings/

Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:

The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.
*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let maxLength = Math.max(num1.length, num2.length);
  let carry = 0;
  let sum = '';
  for (let i = 0; i < maxLength || carry; i++) {
    let temp = (Number(num1[num1.length - i - 1] || 0) + Number(num2[num2.length - i - 1] || 0) + carry);
    carry = Math.floor(temp / 10)
    sum = (temp % 10) + sum;
  }
  return sum;
};

console.log('addStrings()', addStrings('9', '9'))
console.log('addStrings()', addStrings('25', '7189'))
console.log('addStrings()', addStrings('123456789', '987654321'))
"123456789"
"987654321"

// 10
//  9
//
    // 1
// 10
//  2
    2
//   9 9 = 18 % 10 = 8 carry

//11118
// 9999
// 9999
  19998
