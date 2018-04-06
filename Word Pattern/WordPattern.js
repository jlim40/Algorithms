/*
Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Examples:
pattern = "abba", str = "dog cat cat dog" should return true.
pattern = "abba", str = "dog cat cat fish" should return false.
pattern = "aaaa", str = "dog cat cat dog" should return false.
pattern = "abba", str = "dog dog dog dog" should return false.
Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.
*/

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  const obj = {};
  const arr = str.split(' ');
  if (pattern.length !== arr.length) return false;
  for (let i = 0; i < pattern.length; i++) {
    if (obj.hasOwnProperty(pattern[i])) {
      if (obj[pattern[i]] !== arr[i]) return false;
    } else {
      for (const c in obj) {
        if (obj[c] === arr[i]) return false;
      }
      obj[pattern[i]] = arr[i];
    }
  }
  return true;
};
