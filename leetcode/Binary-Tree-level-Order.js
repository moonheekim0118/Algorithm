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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const ans = new Map();
  if (root !== null) {
    ans.set(0, [root.val]);
  }
  function traverse(curr, level) {
    if (curr === null) return;
    const left = curr.left;
    const right = curr.right;
    const tmp = [];
    if (left !== null) {
      tmp.push(left.val);
    }
    if (right !== null) {
      tmp.push(right.val);
    }
    if (tmp.length > 0) {
      if (ans.has(level)) {
        const prev = ans.get(level);
        ans.set(level, [...prev, ...tmp]);
      } else {
        ans.set(level, tmp);
      }
      traverse(left, level + 1);
      traverse(right, level + 1);
    }
  }

  traverse(root, 1);
  return [...ans.values()];
};
