/*
https://leetcode.com/problems/contains-duplicate/
Contains Duplicate
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  const uniqueNumbers = new Set(nums);
  return nums.length > uniqueNumbers.size;
};

console.log(containsDuplicate([1, 2, 3, 4, 5, 1]));
