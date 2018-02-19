/*

Find the sum of all left leaves in a given binary tree.

Example:

    3
   / \
  9  20
    /  \
   15   7

There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.
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
var sumOfLeftLeaves = function(root) {
    return DFSHelper(root, false);
};

let DFSHelper = function(root, bool) {
    if(root === null)
        return 0;
    if(root.left === null && root.right === null){
        if(bool)
            return root.val;
        else
            return 0;
    }
    return DFSHelper(root.left, true) + DFSHelper(root.right, false);
};
