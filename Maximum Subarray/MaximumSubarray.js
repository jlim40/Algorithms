/*
Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let sum = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; ++i) {
    sum = Math.max(nums[i], nums[i] + sum);
    max = Math.max(max, sum);
  }
  return max;
};
