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
 * @return {number}
 */
var sumNumbers = function (root) {
  let sum = 0;
  helper(root, "");
  function helper(node, prefix) {
    const number = `${prefix}${node.val}`;
    if (!node.left && !node.right) {
      sum += +number;
    }
    if (node.left) {
      helper(node.left, number);
    }
    if (node.right) {
      helper(node.right, number);
    }
  }
  return sum;
};
