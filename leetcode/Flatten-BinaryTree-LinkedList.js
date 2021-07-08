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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  const stack = [];

  function dfs(start) {
    if (!start) return;
    stack.push(start);

    if (start.left) dfs(start.left);
    if (start.right) dfs(start.right);
    return;
  }

  dfs(root);
  // 이렇게 만든 stack을 토대로 tree를 재정비한다.
  let idx = 1;
  while (idx < stack.length) {
    root.left = null;
    root.right = stack[idx++];
    root = root.right;
  }
};

function test() {
  const arr = ["a", "b", "C"];

  const size = arr.length;
  let left = 0;
  let right = size - 1;
  while (left < right) {
    const temp = arr[right];
    arr[right] = arr[left];
    arr[left] = temp;
    right--;
    left++;
  }
  console.log(arr);
}

test();
