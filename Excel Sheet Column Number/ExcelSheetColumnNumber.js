/*
Related to question Excel Sheet Column Title

Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28
*/

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let total = 0;
    let i = s.length-1;
    let j = 0;
    for(; i >= 0; i--, j++){
        total += Math.pow(26, j) * (s.charCodeAt(i) - ('A').charCodeAt(0) + 1);
    }
    return total;
};
