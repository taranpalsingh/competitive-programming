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
var pathSum = function(root, targetSum) {
  let ans = [];
  var helper = function (root, array, target) {
      console.log(array);
      if (!root) {
          return 
      } 
      if (!root.left && !root.right && target === root.val) {
          // console.log('found it')
          ans.push([...array, root.val]);
          return array;
      } else {
          // console.log('going deeper')
          helper(root.left, [...array, root.val], target-root.val);
          helper(root.right,  [...array, root.val], target-root.val);
      }   
  }
  
  helper(root, [], targetSum);
  return ans;
};