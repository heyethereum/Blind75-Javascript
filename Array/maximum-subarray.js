/*
https://leetcode.com/problems/maximum-subarray/
Maximum Subarray
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  let maxSum = -Infinity;
  let currentSum = 0;

  nums.forEach((num) => {
    currentSum = Math.max(num, currentSum + num);

    maxSum = Math.max(currentSum, maxSum);
  });
  console.log(maxSum);
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
