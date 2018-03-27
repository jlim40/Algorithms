/*
Given a binary search tree (BST) with duplicates, find all the mode(s) (the most frequently occurred element) in the given BST.

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than or equal to the node's key.
The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
Both the left and right subtrees must also be binary search trees.
For example:
Given BST [1,null,2,2],
   1
    \
     2
    /
   2
return [2].

Note: If a tree has more than one mode, you can return them in any order.

Follow up: Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).
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
var findMode = function(root) {
  let res = [];
  let currCount = 0,
    maxCount = 0,
    modeCount = 0,
    currValue = 0;

  let inOrder = n => {
    if (n) {
      inOrder(n.left);
      getMaxFreq(n.val);
      inOrder(n.right);
    }
  };

  let getMaxFreq = nodeValue => {
    if (currValue !== nodeValue) {
      currValue = nodeValue;
      currCount = 0;
    }
    ++currCount;

    if (currCount > maxCount) {
      maxCount = currCount;
      modeCount = 1;
      res[0] = currValue;
    } else if (currCount === maxCount) {
      res[modeCount] = currValue;
      modeCount++;
    }
  };
  inOrder(root);
  return res.splice(0, modeCount);
};
