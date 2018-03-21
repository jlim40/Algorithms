/*
Given numRows, generate the first numRows of Pascal's triangle.

For example, given numRows = 5,
Return

[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];

  const arr = [[1]];
  for (let i = 1; i < numRows; ++i) {
    const tempArr = [1];
    for (let j = 1; j < i; ++j) {
      tempArr.push(arr[i - 1][j - 1] + arr[i - 1][j]);
    }
    tempArr.push(1);
    arr.push(tempArr);
  }
  return arr;
};
