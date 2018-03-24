/*
Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt.

Example 1:

Input: 16
Returns: True
Example 2:

Input: 14
Returns: False
*/

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  // Iterative Solution
  //
  // for(let i = 0; i < 100000; ++i) {
  //     if (i*i === num)
  //         return true;
  // }
  // return false;

  // Binary Search Solution
  if (num === 1) return true;

  let low = 1,
    high = Math.floor(num / 2),
    mid = 0;

  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);
    if (mid * mid === num) return true;
    else if (mid * mid < num) low = mid + 1;
    else high = mid - 1;
  }
  return false;
};
