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
 * @return {string}
 */
var tree2str = function(root) {
    
  let str = '';
  
  var helper = function(root) {
      
      if (root && root.val != null ) {
          str += root.val.toString();
      }
      
      if (root.left) {
          str+='(';
          helper(root.left);
          str+=')';
      }
      if (root.right && !root.left) {
          str+='(';
          str+=')';
      }
      if (root.right) {
          str+='(';
          helper(root.right);
          str+=')';
      }
      
  }
  
  helper(root);
  return str;
};