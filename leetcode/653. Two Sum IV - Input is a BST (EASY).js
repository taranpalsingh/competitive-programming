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
    var findTargetHelper = function(root) {
        
        if(!root) { 
            return false;
        }

        const comp = k - root.val;
        
        if(obj.hasOwnProperty(comp)) {
            return true;
        } else {
            obj[root.val] = 1;
        }
        
        const left = findTargetHelper(root.left);
        const right = findTargetHelper(root.right);
        return (left || right);
    }
    
    return findTargetHelper(root);
};
