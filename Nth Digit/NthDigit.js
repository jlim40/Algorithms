/*
Find the nth digit of the infinite integer sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...

Note:
n is positive and will fit within the range of a 32-bit signed integer (n < 231).

Example 1:

Input:
3

Output:
3
Example 2:

Input:
11

Output:
0

Explanation:
The 11th digit of the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... is a 0, which is part of the number 10.

*/

/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
  let base = 9;
  let digit = 1;
  let start = 1;
  while (n - base * digit > 0) {
    n -= base * digit;
    base *= 10;
    ++digit;
    start *= 10;
  }
  start += Math.floor((n - 1) / digit);
  return parseInt(start.toString()[(n - 1) % digit]);
};
