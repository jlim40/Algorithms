/*
Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

For example:
Given the below binary tree and sum = 22,

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
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
 * @param {number} sum
 * @return {boolean}
 */

// Efficient way
var hasPathSum = function(root, sum) {
  if (!root) return false;
  if (!root.left && !root.right) return root.val === sum;
  return (
    hasPathSum(root.left, sum - root.val) ||
    hasPathSum(root.right, sum - root.val)
  );
};

// Inefficient way
// var hasPathSum = function(root, sum) {
//     if(!root) return false;
//     return addSum(root, 0, sum);
// };

// const addSum = (root, addedSum, target) => {
//     if(!root) return;
//     if(root) {
//         if(!root.left && !root.right) {
//             if(addedSum+root.val === target){
//                 return true;
//             }
//             else {
//                 return false;
//             }
//         } else if (root.left && root.right) {
//             return addSum(root.left, addedSum+root.val, target) || addSum(root.right, addedSum+root.val, target);
//         } else if (root.left) {
//             return addSum(root.left, addedSum+root.val, target);
//         } else
//             return addSum(root.right, addedSum+root.val, target);
//     }
// }
