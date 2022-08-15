/*
https://leetcode.com/problems/contains-duplicate/
Contains Duplicate
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  const tempArray = new Set(nums);
  return nums.length !== tempArray.size;
};

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
