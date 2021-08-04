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
 * @return {number[][]}
 */
var pathSum = function(root, target) {
    
  const results = [];
  var pathSumHelper = function(root, target, path) {
    if(!root)
        return;
    // ending condition for recursion
    path = [...path, root.val];
    target = target - root.val;
    if(!root.left && !root.right) {
      if(target === 0) {
        results.push(path);
      }
      return;
    }

    pathSumHelper(root.left, target, path);
    pathSumHelper(root.right, target, path);

  }
  pathSumHelper(root, target, []);
  return results;
};