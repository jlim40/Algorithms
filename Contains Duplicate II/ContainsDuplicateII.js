/*
Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  const obj = {};
  for (let i = 0; i < nums.length; ++i) {
    if (obj.hasOwnProperty(nums[i]))
      if (Math.abs(obj[nums[i]] - i) <= k) return true;
    obj[nums[i]] = i;
  }
  return false;
};
