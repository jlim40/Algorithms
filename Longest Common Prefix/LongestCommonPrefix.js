/*
Write a function to find the longest common prefix string amongst an array of strings.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return '';
  let prefix = strs[0];
  for (let i = 1; i < strs.length; ++i) {
    for (let j = 1; j <= prefix.length; ++j) {
      if (!strs[i].startsWith(prefix.substr(0, j)))
        prefix = strs[i].substr(0, j - 1);
    }
  }
  return prefix;
};
