/*
Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.

Example:

Input:
"abccccdd"

Output:
7

Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const obj = {};
    for(const letter of s) {
        obj[letter] = obj[letter] ? obj[letter] + 1 : 1;
    }
    let count = 0;
    for(const letter in obj) {
        count += obj[letter] % 2 === 0 ? obj[letter] : obj[letter] - 1;
    }
    if(count < s.length)
        count += 1;
    return count;
};

// Actually Finding the largest palindrome out of a string
//
// var longestPalindrome = function(s) {
//     const obj = {};
//     for(const letter of s) {
//         obj[letter] = obj[letter] ? obj[letter] + 1 : 1;
//     }
//     let res = "";
//     let temp;
//     for(const letter in obj) {
//         while(obj[letter] > 1) {
//             res = letter + res + letter;
//             obj[letter] = obj[letter] - 2;
//         }
//         if(obj[letter] === 1)
//             temp = letter;
//     }
//     res = res.substr(0, res.length/2) + (temp ? temp : "") + res.substr(res.length/2);
//     return res.length;
// };

