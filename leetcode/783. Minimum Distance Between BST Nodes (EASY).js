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
var minDiffInBST = function(root) {
  let min = Number.POSITIVE_INFINITY, arr = [];

  var inorder = function(root) {
      if (!root) return
      inorder(root.left);
      arr.push(root.val);
      inorder(root.right);
  }
  inorder(root);
  // console.log(arr);
  for (let i=0; i<arr.length-1; i++) {
      min = Math.min(Math.abs(arr[i] - arr[i+1]), min);
  }
  return min;
};




// var minDiffInBST = function(root) {
//     let min = Number.POSITIVE_INFINITY, arr = [];

//     var helper = function(root) {
//         if (!root) return;
//         arr.push(root.val);
//         helper(root.left);
//         helper(root.right);
//     }
//     helper(root);
//     arr = arr.sort((a,b) => b-a);
//     for (let i=0; i<arr.length-1; i++) {
//         min = Math.min(Math.abs(arr[i] - arr[i+1]), min);
//     }
//     // console.log(arr)
//     return min;
// };