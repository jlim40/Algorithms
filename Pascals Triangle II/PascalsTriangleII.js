/*
Given an index k, return the kth row of the Pascal's triangle.

For example, given k = 3,
Return [1,3,3,1].

Note:
Could you optimize your algorithm to use only O(k) extra space?
*/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  const arr = new Array(rowIndex + 1);
  arr[0] = 1;
  // Fill with 0 from pos 1
  arr.fill(0, 1);
  for (let i = 1; i < rowIndex + 1; ++i) {
    for (let j = i; j >= 1; --j) {
      arr[j] = arr[j] + arr[j - 1];
    }
  }
  return arr;
};
