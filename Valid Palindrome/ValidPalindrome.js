/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const clean = s
    .trim()
    .replace(/[^0-9A-Z]+/gi, '')
    .toLowerCase();
  for (let i = 0; i < Math.floor(clean.length / 2); ++i) {
    if (clean[i] !== clean[clean.length - 1 - i]) return false;
  }
  return true;
};
