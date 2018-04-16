/*
Implement int sqrt(int x).

Compute and return the square root of x.

x is guaranteed to be a non-negative integer.


Example 1:

Input: 4
Output: 2
Example 2:

Input: 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we want to return an integer,
*/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  // return Math.floor(Math.sqrt(x));

  // Binary Search
  if (x === 0) return 0;
  let left = 1,
    right = x,
    ans;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (mid <= Math.floor(x / mid)) {
      left = mid + 1;
      ans = mid;
    } else {
      right = mid - 1;
    }
  }
  return ans;
};
