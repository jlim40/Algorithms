/*
Given a binary tree, return all root-to-leaf paths.

For example, given the following binary tree:

   1
 /   \
2     3
 \
  5
All root-to-leaf paths are:

["1->2->5", "1->3"]
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (!root) return [];
  const list = [];
  traverse(root, '', list);
  return list;
};

let traverse = (node, str, list) => {
  if (!node) return;

  str += node.val;
  if (node.left) traverse(node.left, str + '->', list);
  if (node.right) traverse(node.right, str + '->', list);
  if (!node.left && !node.right) list.push(str);
};
