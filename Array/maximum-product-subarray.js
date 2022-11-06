/*
https://leetcode.com/problems/maximum-product-subarray/
Maximum product sub Array
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  if (!nums || nums.length === 0) return 0;
  let maxProductSum = nums[0];
  let min = nums[0];
  let max = nums[0];

  for (let index = 1; index < nums.length; index++) {
    const num = nums[index];
    const a = num * max;
    const b = num * min;
    max = Math.max(a, b, num);
    min = Math.min(a, b, num);

    maxProductSum = Math.max(maxProductSum, max);
  }

  console.log(maxProductSum);
};

maxSubArray([2, 3, -2, 4]);
