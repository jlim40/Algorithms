/*
Given a binary tree, find the length of the longest path where each node in the path has the same value. This path may or may not pass through the root.

Note: The length of path between two nodes is represented by the number of edges between them.

Example 1:

Input:

              5
             / \
            4   5
           / \   \
          1   1   5
Output:

2
Example 2:

Input:

              1
             / \
            4   5
           / \   \
          4   4   5
Output:

2
Note: The given binary tree has not more than 10000 nodes. The height of the tree is not more than 1000.
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
var longestUnivaluePath = function(root) {
  if (!root) return 0;
  const longestFromRoot =
    longestPath(root.left, root.val) + longestPath(root.right, root.val);
  const longestFromChildren = Math.max(
    longestUnivaluePath(root.left),
    longestUnivaluePath(root.right)
  );
  return Math.max(longestFromRoot, longestFromChildren);
};

const longestPath = (node, val) => {
  if (!node || node.val !== val) return 0;
  return (
    1 + Math.max(longestPath(node.left, val), longestPath(node.right, val))
  );
};
