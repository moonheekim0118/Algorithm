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
var isSymmetric = function (root) {
  if (root === null) return true;
  const ans = compare(root.left, root.right);
  function compare(node1, node2) {
    if (node1 === null && node2 === null) return true;
    else if (node1 === null || node2 === null) return false;
    if (node1.val === node2.val) {
      const res1 = compare(node1.left, node2.right);
      const res2 = compare(node1.right, node2.left);
      return res1 && res2;
    } else {
      return false;
    }
  }
  return ans;
};
