/*
Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
Example 1:
Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [3, 14.5, 11]
Explanation:
The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
Note:
The range of node's value is in the range of 32-bit signed integer.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    let result = [];
    let count = [];
    let level = 0;
    traverseAndSum(root, result, level, count);
    for(let i=0; i<result.length; i++){
        result[i] = result[i]/count[i];
    }
    return result;
};

let traverseAndSum = (n, result, level, count) => {
    if(n !== null){
        result[level] = result[level] === undefined ? n.val : result[level] + n.val;
        count[level] = count[level] === undefined ? 1 : ++count[level];
        ++level;
        traverseAndSum(n.left, result, level, count);
        traverseAndSum(n.right, result, level, count);
    }
};
