/*
Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:
Given s = "hello", return "holle".

Example 2:
Given s = "leetcode", return "leotcede".

Note:
The vowels does not include the letter "y".
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let left = 0;
  let right = s.length - 1;
  s = s.split('');
  while (left < right) {
    if (isVowel(s[left]) && isVowel(s[right])) {
      const temp = s[left];
      s[left] = s[right];
      s[right] = temp;
      ++left;
      --right;
    } else {
      if (!isVowel(s[left])) ++left;
      if (!isVowel(s[right])) --right;
    }
  }
  return s.join('');
};

let isVowel = ch => {
  for (let vowel of 'aeiouAEIOU') {
    if (ch === vowel) {
      return true;
    }
  }
  return false;
};
