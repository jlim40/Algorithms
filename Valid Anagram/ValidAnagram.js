/*
Given two strings s and t, write a function to determine if t is an anagram of s.

For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.

Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function(s, t) {
//     let obj = {};
//     for(c of s) {
//         obj[c] = obj[c] ? obj[c] + 1: 1;
//     }
//     for(c of t) {
//         if(obj[c]) {
//             obj[c] = obj[c] - 1;
//         } else {
//             return false;
//         }
//     }
//     for(c in obj) {
//         if(obj[c] !== 0)
//             return false;
//     }
//     return true;
// }

var isAnagram = (s, t) => {
	const map = {};
	s.split('').map(c => map[c] = map[c] ? map[c] + 1 : 1);
	t.split('').map(c => map[c] = map[c] ? map[c] - 1 : -1);
	return Object.keys(map).every(k => map[k] === 0);
};
