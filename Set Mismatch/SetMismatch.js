/*
The set S originally contains numbers from 1 to n. But unfortunately, due to the data error, one of the numbers in the set got duplicated to another number in the set, which results in repetition of one number and loss of another number.

Given an array nums representing the data status of this set after the error. Your task is to firstly find the number occurs twice and then find the number that is missing. Return them in the form of an array.

Example 1:
Input: nums = [1,2,2,4]
Output: [2,3]
Note:
The given array size will in the range [2, 10000].
The given array's numbers won't have any order.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  let obj = {};
  const res = [];
  for (num of nums) {
    obj[num] = obj[num] ? obj[num] + 1 : 1;
    if (obj[num] === 2) res.push(num);
  }
  for (let i = 1; i <= nums.length; ++i) {
    if (!obj[i]) {
      res.push(i);
      break;
    }
  }
  return res;
};
