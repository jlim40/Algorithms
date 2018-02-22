/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let obj = {};
    for (c of s) {
        obj[c] = obj.hasOwnProperty(c) ? obj[c] + 1: 1;
    }
    let idx = 0;
    for (c of s) {
        if(obj[c] === 1){
            return idx;
        }
        idx++;
    }
    return -1;
};
