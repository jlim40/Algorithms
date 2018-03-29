/*
Given an integer n, return the number of trailing zeroes in n!.

Note: Your solution should be in logarithmic time complexity.
*/

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let res = 0;
  while (n > 0) {
    n = Math.floor(n / 5);
    res += n;
  }
  return res;
};
