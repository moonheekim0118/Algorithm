/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */

let flag = false;
var hasPathSum = function (root, targetSum) {
  helper(root, targetSum, 0);
  return flag;
};

var helper = function (root, targetSum, sum) {
  if (!root) return;
  const tmp = sum + root.val;
  if (!root.left && !root.right && tmp === targetSum) flag = true;
  helper(root.left, targetSum, tmp);
  helper(root.right, targetSum, tmp);
};
