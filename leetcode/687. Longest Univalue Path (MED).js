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
var longestUnivaluePath = function(root) {
  if (!root) return 0;
  let best = 0;

  var helper = function(root, parentVal) {
      if (!root) return 0;
      const val = root.val;
      let leftSum = helper(root.left, val);        
      let rightSum = helper(root.right, val);   
      const sum = leftSum + rightSum;
      best = Math.max(best, sum);
      if (val === parentVal) {
          return Math.max(leftSum, rightSum) + 1;
      }
      return 0;
  }
  helper(root, root.val);
  return best;
};