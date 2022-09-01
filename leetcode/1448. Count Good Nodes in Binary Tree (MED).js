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
var goodNodes = function(root) {

  let count = 0;
  var helper = function(root, x) {
      if (!root) {
          return null;
      }
      if (root.val >= x) {
          count++;
      }
      helper(root.right, Math.max(x, root.val));
      helper(root.left, Math.max(x, root.val));
  }
  
  helper(root, Number.NEGATIVE_INFINITY);
  return count;
};