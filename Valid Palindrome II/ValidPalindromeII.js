/*
Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

Example 1:
Input: "aba"
Output: True
Example 2:
Input: "abca"
Output: True
Explanation: You could delete the character 'c'.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  if(isPalindrome(s))
      return true;
  let i = 0;
  let j = s.length-1;
  let = mid = Math.floor(s.length/2)
  for(; i < mid; ++i, --j) {
      if(s[i] !== s[j]) {
          let str = s.substr(0, i) + s.substr(i + 1);
          let str2 = s.substr(0, j) + s.substr(j + 1);
          return isPalindrome(str) || isPalindrome(str2);
      }           
  }
  return false;
};

const isPalindrome = (s) => {
  let i = 0;
  let j = s.length-1;
  const mid = Math.floor(s.length/2);
  while(i < mid) {
      if(s[i] !== s[j])
          return false;
      ++i;
      --j;
  }
  return true;
};

// This way is slower
// const isPalindrome = (s) => s === s.split('').reverse().join('');



