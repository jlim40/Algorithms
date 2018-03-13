/*
Given an integer, write a function to determine if it is a power of two.
*/

/**
 * @param {number} n
 * @return {boolean}
 */
// using bit & operator
//
var isPowerOfTwo = function(n) {
  if (n <= 0) return false;
  return (n & (n - 1)) === 0;
};

// using iteration
//
// var isPowerOfTwo = function(n) {
//   if(n===0) return false;
//   while(n % 2 === 0) n/=2;
//   return n===1;
// };
