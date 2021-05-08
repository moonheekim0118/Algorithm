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
 * @return {boolean}
 */
var isValidBST = function (root) {
  return helper(root, null, null);
};

const helper = function (node, min, max) {
  if (!node) return true;
  if (min && node.val <= min.val) return false;
  if (max && node.val >= max.val) return false;
  return helper(node.left, min, node) && helper(node.right, max, node);
};
