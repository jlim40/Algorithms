/*
Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

Example:
For num = 5 you should return [0,1,1,2,1,2].

Follow up:

It is very easy to come up with a solution with run time O(n*sizeof(integer)). But can you do it in linear time O(n) /possibly in a single pass?
Space complexity should be O(n).
Can you do it like a boss? Do it without using any builtin function like __builtin_popcount in c++ or in any other language.
*/

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  // i & i-1 dp method
  //
  const dp = new Array(num + 1);
  dp.fill(0);
  for (let i = 1; i <= num; ++i) {
    dp[i] = dp[i & (i - 1)] + 1;
  }
  return dp;

  // toString(2) method
  //
  // const arr = [];
  // for(let i = 0; i <= num; ++i) {
  //     arr.push(i.toString(2).split('').filter(a => a == 1).length);
  // }
  // return arr;
};
