/*
A string S of lowercase letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.

Example 1:
Input: S = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.
Note:

S will have length in range [1, 500].
S will consist of lowercase letters ('a' to 'z') only.
*/

/**
 * @param {string} S
 * @return {number[]}
 */

var partitionLabels = function(S) {
  let limit = 0;
  let count = 1;
  const res = [];
  for (let i = 0; i < S.length; ++i) {
    limit = limit < S.lastIndexOf(S[i]) ? S.lastIndexOf(S[i]) : limit;
    if (i === limit) {
      res.push(count);
      count = 1;
    } else ++count;
  }
  return res;
};

/*
var partitionLabels = function(S) {
  let limit = 0;
  let count = 0;
  const obj = {};
  const res = [];
  for (let i = 0; i < S.length; ++i) {
    if (!obj[S[i]]) {
      for (let j = S.length - 1; j > limit; --j) {
        if (S[i] === S[j]) {
          limit = j;
        }
      }
    } else {
      obj[S[i]] = true;
    }
    ++count;

    if (i === limit) {
      res.push(count);
      count = 0;
    }
  }
  return res;
};
*/
