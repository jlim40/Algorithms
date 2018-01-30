/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let regex = /^[qwertyuiop]*$|^[asdfghjkl]*$|^[zxcvbnm]*$/i;
    let result = [];
    words.forEach((word) => {
        if(regex.test(word))
            result.push(word);
    });
    return result;
};
