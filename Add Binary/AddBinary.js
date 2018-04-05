/*
Given two binary strings, return their sum (also a binary string).

For example,
a = "11"
b = "1"
Return "100".
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let res = '';
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  while (i >= 0 || j >= 0) {
    let aBit = i >= 0 ? parseInt(a[i]) : 0;
    let bBit = j >= 0 ? parseInt(b[j]) : 0;
    --i;
    --j;
    let sum = aBit + bBit + carry;
    res = (sum % 2).toString() + res;
    carry = Math.floor(sum / 2);
  }
  return carry === 1 ? carry + res : res;
};
