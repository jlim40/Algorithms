/*
Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Note: In the string, each word is separated by single space and there will not be any extra space in the string.
*/


/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(' ');
    arr = arr.map((word) => reverseString(word));
    return arr.join(' ');
};

var reverseString = function(s) {
  // return s.split('').reverse().join('');
  let arr = [];
  for(let i=s.length-1; i>=0; i--){
    arr.push(s[i]);
  }
  return arr.join('');
};
