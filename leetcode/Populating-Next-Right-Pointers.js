// node Populating-Next-Right-Pointers
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return null;
  if (!root.left) {
    root.next = null;
    return root;
  }
  connectNodes(root.left, root.right);

  function connectNodes(node1, node2) {
    node1.next = node2;
    if (node1.left != null) {
      connectNodes(node1.right, node2.left);
      connectNodes(node1.left, node1.right);
      connectNodes(node2.left, node2.right);
    }
  }
  return root;
};
