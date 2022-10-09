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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    const obj = {};
    var helper = function(root) {
        if (!root) 
            return false;
        
        if (obj.hasOwnProperty(k - root.val))
            return true;
        else
            obj[root.val] = 1;
        return helper(root.left) || helper(root.right);
    }
    return helper(root);
};