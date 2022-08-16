/*
https://leetcode.com/problems/product-of-array-except-self/
Product of Array Except Self
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
  const len = nums.length;
  let prefix = 1,
    suffix = 1;

  return nums.reduce((result, number, index) => {
    result[index] *= prefix;
    prefix *= number;
    result[len - index - 1] *= suffix;
    suffix *= nums[len - index - 1];

    return result;
  }, new Array(len).fill(1));
};

console.log(productExceptSelf([1, 2, 3, 4]));
