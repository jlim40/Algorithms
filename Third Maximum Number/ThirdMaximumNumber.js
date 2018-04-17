/*
Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

Example 1:
Input: [3, 2, 1]

Output: 1

Explanation: The third maximum is 1.
Example 2:
Input: [1, 2]

Output: 2

Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
Example 3:
Input: [2, 2, 3, 1]

Output: 1

Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  // Using Sort
  nums.sort((a, b) => a - b);
  if (nums.length === 1) return nums[0];
  let i = nums.length - 1;
  let count = 0;
  while (i > 0 && count < 2) {
    if (nums[i] === nums[i - 1]) {
      --i;
    } else {
      --i;
      ++count;
    }
  }
  return count === 2 ? nums[i] : nums[nums.length - 1];

  // Using Set
  // const numSet = new Set(nums);
  // if (numSet.size < 3) {
  //    return Math.max(...numSet);
  // }
  // numSet.delete(Math.max(...numSet));
  // numSet.delete(Math.max(...numSet));
  // return Math.max(...numSet);
};
