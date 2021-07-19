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

var deepestLeavesSum = function(root) {
    
  let ans = 0, currRow = [root];
  let nextRow = [];
  
  var deepestLeavesSumHelper = function(root) {
    console.log(currRow);
    nextRow = [];
    currRow.forEach(root => {
      console.log(root.val);
      if(root.left) {
        nextRow.push(root.left);
      } 
      
      if(root.right) {
        nextRow.push(root.right);
      }
    })

    if(nextRow.length) {
      currRow = nextRow;
    } else {
      nextRow = currRow;
      currRow = [];
    }
  }

  while(currRow.length) {
    deepestLeavesSumHelper(currRow);
  }
  console.log(nextRow);
  nextRow.forEach(root => {
    ans += root.val;
  })
  return ans;
};