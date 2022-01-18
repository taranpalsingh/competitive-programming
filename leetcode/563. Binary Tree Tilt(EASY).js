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

 var findTilt = function(root) {

    let sum = 0;
    var helper = function(root) {
        if(!root) {
            return 0;
        }
        let right = 0, left = 0;
    
        left = helper(root.left);
        right = helper(root.right);
        
        sum += Math.abs(right - left)
        return (right + left + root.val);
    }

    helper(root)
    return sum;
};
