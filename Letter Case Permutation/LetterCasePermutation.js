/*
Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.  Return a list of all possible strings we could create.

Examples:
Input: S = "a1b2"
Output: ["a1b2", "a1B2", "A1b2", "A1B2"]

Input: S = "3z4"
Output: ["3z4", "3Z4"]

Input: S = "12345"
Output: ["12345"]
Note:

S will be a string with length at most 12.
S will consist only of letters or digits.
*/

/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    let result = [];
    helper(result, "", S, 0);
    return result;
};

let helper = function(result, curr, S, index){
    if(S.length === curr.length){
        result.push(curr);
        return;
    }
    let ch = S.charAt(index);
    if(isLetter(ch)){
        helper(result, curr+ch.toUpperCase(), S, index+1);
        helper(result, curr+ch.toLowerCase(), S, index+1);
    } else {
        helper(result, curr+ch, S, index+1);
    }
}

let isLetter = function(c){
    return /[a-zA-Z]/.test(c);
}
