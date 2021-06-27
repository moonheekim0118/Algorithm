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
var longestUnivaluePath = function (root) {
  let max = 0;

  function helper(curr) {
    if (!curr) return 0;
    let left = helper(curr.left);
    let right = helper(curr.right);
    if (curr.left && curr.left.val === curr.val) {
      left++;
    } else {
      left = 0;
    }
    if (curr.right && curr.right.val === curr.val) {
      right++;
    } else {
      right = 0;
    }
    max = Math.max(max, left + right);
    return Math.max(left, right);
  }

  helper();
  return max;
};
