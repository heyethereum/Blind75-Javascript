/*
https://leetcode.com/problems/two-sum/
Two Sum
*/

// Brute force method Time Complexity: O(n²), Space Complexity: O(1)
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};

// Optimized with Hash table. Time Complexity: O(n), Space Complexity: O(n)

const twoSumHashTableMap = (nums, target) => {
  const hashTable = new Map();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (hashTable.has(diff)) return [hashTable.get(diff), i];

    hashTable.set(nums[i], i);
    //console.log(hashTable);
  }
};

console.log(twoSum([3, 2, 4], 6));
console.log(twoSumHashTableMap([3, 2, 4], 6));
