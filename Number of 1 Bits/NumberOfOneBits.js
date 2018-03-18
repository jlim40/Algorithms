/*
Write a function that takes an unsigned integer and returns the number of ’1' bits it has (also known as the Hamming weight).

For example, the 32-bit integer ’11' has binary representation 00000000000000000000000000001011, so the function should return 3.
*/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  // return n.toString(2).split('0').join('').length;

  // Brian Kernighan’s Algorithm
  //
  let count = 0;
  while (n) {
    n = n & (n - 1);
    ++count;
  }
  return count;
};
