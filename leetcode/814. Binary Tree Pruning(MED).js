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
 * @return {TreeNode}
 */
var pruneTree = function(root) {
    
  var pruneTreeHelper = function(root) {

      let left = 0, right = 0;
      if(root.left) {
          left = pruneTreeHelper(root.left);
          if(!left) {
              root.left = null;
          }
      } 
      if(root.right) {
          right = pruneTreeHelper(root.right);
          if(!right) {
              root.right = null;
          }
      }
      if(root.val === 1) {
          return 1;
      }
      return (right || left);
  }
  
  let rootVal = pruneTreeHelper(root)
  if(!rootVal) {
      return null;
  }
  return root;
};