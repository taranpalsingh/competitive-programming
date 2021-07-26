/**
 * Definition for a binary tree node.
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
 
var sortedArrayToBST = function(nums) {

  if(nums.length < 1) {
      return null;
    } else if(nums.length === 1) {
      return new TreeNode(nums[0], null, null)
    }
    const mid = (nums.length%2 === 0) ? nums.length/2 - 1: Math.ceil(nums.length/2) - 1;  
    let root = new TreeNode(nums[mid], null, null);

    root.left = sortedArrayToBST(nums.slice(0, mid))
    root.right = sortedArrayToBST(nums.slice(mid+1, nums.length))
    return root;
};

console.log(sortedArrayToBST([-10,-3,0,5,9]));