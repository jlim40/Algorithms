/*
Write a function that takes a string as input and returns the string reversed.

Example:
Given s = "hello", return "olleh".
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
  // return s.split('').reverse().join('');
  let arr = [];
  for(let i=s.length-1; i>=0; i--){
    arr.push(s[i]);
  }
  return arr.join('');
};
