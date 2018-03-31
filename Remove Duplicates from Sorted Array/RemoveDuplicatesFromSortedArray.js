/*
Given a sorted array, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example:

Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
It doesn't matter what you leave beyond the new length.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
  let pos = 0;
  for (let i = 0, s = ''; i < nums.length; i++) {
    if (nums[i] !== s) {
      nums[pos++] = nums[i];
      s = nums[i];
    }
  }
  return pos;
};

/*
var removeDuplicates = function(nums) {
  let count = 0;
  let firstPos = 0;
  for(let i = 0; i < nums.length-1; ++i) {
      if(nums[i] === nums[i+1]) {
          ++count;
      } else {
          if(count) {
              nums.splice(firstPos, count);
              i = i - count;
              count = 0;
          }
          firstPos = i + 1;
      }
  }
  if(count)
      nums.splice(firstPos+1, count);
};
*/
