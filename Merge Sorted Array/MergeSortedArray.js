/*
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let idx = m + n - 1;
  while (i >= 0 || j >= 0) {
    if (j < 0) break;
    else if (i < 0) nums1[idx--] = nums2[j--];
    else {
      if (nums1[i] >= nums2[j]) nums1[idx--] = nums1[i--];
      else nums1[idx--] = nums2[j--];
    }
  }
};
