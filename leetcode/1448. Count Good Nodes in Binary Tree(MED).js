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
  let ans = 0;

  var goodNodesHelper = function(root, prevVal) {
      if(!root) {
          return;
      }
      if(root.val >= prevVal) {
          // console.log(prevVal);
          // console.log(`root.val: ${root.val}`);
          ans++;
      }
      
      goodNodesHelper(root.left, Math.max(root.val, prevVal))
      goodNodesHelper(root.right, Math.max(root.val, prevVal))
  };
  goodNodesHelper(root, -Infinity);
  return ans;
};