/*
Given two strings representing two complex numbers.

You need to return a string representing their multiplication. Note i2 = -1 according to the definition.

Example 1:
Input: "1+1i", "1+1i"
Output: "0+2i"
Explanation: (1 + i) * (1 + i) = 1 + i2 + 2 * i = 2i, and you need convert it to the form of 0+2i.
Example 2:
Input: "1+-1i", "1+-1i"
Output: "0+-2i"
Explanation: (1 - i) * (1 - i) = 1 + i2 - 2 * i = -2i, and you need convert it to the form of 0+-2i.
Note:

The input strings will not have extra blank.
The input strings will be given in the form of a+bi, where the integer a and b will both belong to the range of [-100, 100]. And the output should be also in this form.

*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {
  //     const aTemp = a.split('+');
  //     let a1 = Number(aTemp[0]);
  //     let b1 = Number(aTemp[1].substring(0, aTemp[1].length-1));

  //     const bTemp = b.split('+');
  //     let a2 = Number(bTemp[0]);
  //     let b2 = Number(bTemp[1].substring(0, bTemp[1].length-1));

  // destructuring is a better way
  let [a1, b1] = a.split('+');
  let [a2, b2] = b.split('+');

  // parseInt gets rid of i at the end
  a1 = parseInt(a1);
  b1 = parseInt(b1);
  a2 = parseInt(a2);
  b2 = parseInt(b2);

  let first = a1 * a2 - b1 * b2;
  let last = a1 * b2 + b1 * a2;

  return first + '+' + last + 'i';
};
