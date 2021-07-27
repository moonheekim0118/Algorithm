/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  function helper(left, right) {
    if (left > right) return null;
    let mid = left + Math.floor((right - left) / 2);
    const leftNode = helper(left, mid - 1);
    const rightNode = helper(mid + 1, right);
    return new TreeNode(nums[mid], leftNode, rightNode);
  }

  return helper(0, nums.length - 1);
};
