/*
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
Best Time to Buy and Sell Stock
*/

/**
 * @param {number[]} prices
 * @return {number}
 */

// brute force method. Time complexity: O(n²), Space Complexity: O(1)
const maxProfit = function (prices) {
  let max = 0,
    numberOfDays = prices.length;
  for (let i = 0; i < numberOfDays; i++) {
    for (let j = i + 1; j < numberOfDays; j++) {
      max = Math.max(max, prices[j] - prices[i]);
    }
  }
  return max;
};

// Optimized one pass. Time complexity: O(n). Space complexity: O(1)
const maxProfitOnePass = function (prices) {
  let min = prices[0];
  return prices.reduce((max, number) => {
    min = Math.min(min, number);
    return Math.max(max, number - min);
  }, 0);
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfitOnePass([7, 1, 5, 3, 6, 4]));
