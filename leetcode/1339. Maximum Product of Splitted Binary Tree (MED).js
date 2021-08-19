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
var maxProduct = function(root) {

  const mod = Math.pow(10, 9) + 7;

  var treeSum = function(root) {
    if(!root) {
        return 0;
    }

    const left = treeSum(root.left)
    const right = treeSum(root.right)
      
    return left + right + root.val; 
  }

  const sum = treeSum(root);
  
  let maxProduct = 1;
  var maxProductHelper = function(root) {
      if(!root) {
          return 0;
      }

      const left = maxProductHelper(root.left)
      const right = maxProductHelper(root.right)

      const compSum = left + right + root.val;
      maxProduct = Math.max(maxProduct, Math.abs(sum - compSum) * compSum);

      return (left + right + root.val);
  };
  
  maxProductHelper(root);
  return maxProduct % mod;
};