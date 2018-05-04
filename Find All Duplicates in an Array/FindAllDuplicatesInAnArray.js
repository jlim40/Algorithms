/*
Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Example:
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  const list = [];
  for (num of nums) {
    let abs = Math.abs(num);
    if (nums[abs - 1] > 0) nums[abs - 1] *= -1;
    else list.push(abs);
  }
  return list;

  // using extra space
  //
  // const list = [];
  // const obj = {};
  // for(num of nums) {
  //     if(obj[num])
  //         list.push(num);
  //     else
  //         obj[num] = true;
  // }
  // return list;
};
