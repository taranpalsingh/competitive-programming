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
var maxLevelSum = function(root) {
    let q = [root], depth = 1, ans = 1, maxSum = root.val;

    while (q.length) {
      let newq = [], sum = 0;

      while (q.length) {
        const node = q.shift();
        sum += node.val;
        if (node.left)
          newq.push(node.left);
        if (node.right)
          newq.push(node.right);
      } 
      if (sum > maxSum){
        maxSum = sum;
        ans = depth;
      }
      depth++;
      q = newq;
    }
    
    return ans;
};