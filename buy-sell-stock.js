/*
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.

Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.

*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      profit = Math.max(prices[j] - prices[i], profit);
    }
  }
  if (profit <= 0) return 0;
  return profit;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitImproved = (prices) => {
  let minPrice = Number.MAX_SAFE_INTEGER;
  let maxProfit = 0;
  prices.forEach((price) => {
    if (price < minPrice) minPrice = price;
    else if ((price - minPrice) > maxProfit) maxProfit = price - minPrice;
  });
  return maxProfit;
}

console.log('maxProfit([7,1,5,3,6,4]):', maxProfit([7,1,5,3,6,4]), '=== 5?');
console.log('maxProfit([7,6,4,3,1]):', maxProfit([7,6,4,3,1]), '=== 0?');

console.log('maxProfitImproved([7,1,5,3,6,4]):', maxProfitImproved([7,1,5,3,6,4]), '=== 5?');

// [7,1,5,3,6,4]
//    |
//    buy   |
//          sell
//  1 - 7 = -6
// 5 - 7 = -2
// 3 - 7 = -4 ...
// 5 - 1 = 4
// 3 - 1 = 2
// 6 - 1 = 5
// 4 - 1 = 3
