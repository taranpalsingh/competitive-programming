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
var longestZigZag = function(root) {
  let best = 0;

  var helper = function(root, shouldBeRight, count) {
      if (!root) {
          return 0;
      }
      best = Math.max(best, count + 1);
      if (root.right) {
          if (shouldBeRight) {
              helper(root.right, false, count + 1);
          } else
              helper(root.right, false, 0);
      }
      if (root.left) {
          if (shouldBeRight) {
              helper(root.left, true, 0);
          } else
              helper(root.left, true, count + 1);
      }
  }
  helper(root.right, false, 0);
  helper(root.left, true, 0);
  return best;
};