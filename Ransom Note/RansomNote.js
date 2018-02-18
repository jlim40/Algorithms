/*
Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let arr = [];
    let i = 0;
    for(; i < 26; i++)
        arr[i] = 0;
    for(i = 0; i < magazine.length; i++){
        arr[magazine.charCodeAt(i) - 97]++;
    }
    let idx;
    for(i = 0; i< ransomNote.length; i++){
        idx = ransomNote.charCodeAt(i);
        arr[idx - 97]--;
        if(arr[idx - 97] < 0)
            return false;
    }
    return true;
};
