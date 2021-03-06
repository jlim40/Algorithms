/*
Given a Binary Search Tree and a target number, return true if there exist two elements in the BST such that their sum is equal to the given target.

Example 1:
Input:
    5
   / \
  3   6
 / \   \
2   4   7

Target = 9

Output: True
Example 2:
Input:
    5
   / \
  3   6
 / \   \
2   4   7

Target = 28

Output: False
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    const nodes = [];
    function inOrder(node){
        if(!node)
            return ;
        inOrder(node.left);
        nodes.push(node.val);
        inOrder(node.right);
    }
    inOrder(root);
    let i = 0;
    let j = nodes.length-1;
    let sum;
    while(i < j){
        sum = nodes[i] + nodes[j];
        if(sum === k)
            return true;
        else if (sum < k)
            i++;
        else
            j--;
    }
    return false;
};
