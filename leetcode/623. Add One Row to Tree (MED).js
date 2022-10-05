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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
    
  let newRoot = new TreeNode(val, null, null);
  
  if (depth === 1) {
    newRoot.left = root;            
    return newRoot;
  }
  
  var helper = function(root, currDepth) {
    if (!root) {
      return
    }  
    if (currDepth === depth - 1) {
      let leftRoot = new TreeNode(val, root.left, null);
      root.left = leftRoot;
      let rightRoot = new TreeNode(val, null, root.right);
      root.right = rightRoot;
    } else {
      helper(root.left, currDepth + 1);
      helper(root.right, currDepth + 1);
    }
  }

  helper(root, 1);
  return root;
};