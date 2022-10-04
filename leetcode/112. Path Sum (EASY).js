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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  let exists = false;
  var helper = function(root, target) {
      
      if (!root) {
          return;
      }
      
      if ((root.val === target) && !root.left && !root.right) {
          exists = true;
          return;
      }
      
      helper(root.left, target - root.val);
      helper(root.right, target - root.val);        
  }
  
  helper(root, targetSum);
  return exists;
};