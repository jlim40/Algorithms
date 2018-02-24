/*
Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.

Example:

Input:

   1
    \
     3
    /
   2

Output:
1

Explanation:
The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).
Note: There are at least two nodes in this BST.
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
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let arr = [];
    inOrder(root, arr);
    let min = arr[1] - arr[0];
    for(let i = 2; i < arr.length; ++i) {
        let temp = arr[i] - arr[i-1];
        if(temp < min) {
            min = temp;
        }
    }
    return min;
};

let inOrder = (root, arr)=> {
    if(root) {
        inOrder(root.left, arr);
        arr.push(root.val);
        inOrder(root.right, arr);
    }
};