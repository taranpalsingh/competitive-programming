/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */




// 1st approach
var lowestCommonAncestor = function(root, p, q) {

  let left = null, right = null;

  left = root.left ? lowestCommonAncestor(root.left, p, q): null;
  right = root.right ? lowestCommonAncestor(root.right, p, q): null;

  if(root.val === p.val) {
    return p;
  } else if(root.val === q.val) {
    return q;
  }

  if(left && right) {
    return root;
  } else if(left && !right) {
    return left;
  } else if(!left && right) {
    return right;
  } if(!left && !right) {
    return null;
  }
};





// 2nd, better apporoach
// var lowestCommonAncestor = function(root, p, q) {

//   //   let left = null, right = null;
  
//   if(root.val > p.val && root.val > q.val) {
//     console.log("going left");
//     ans = lowestCommonAncestor(root.left, p, q)
//   } else if(root.val < p.val && root.val < q.val) {
//     console.log("going right");
//     ans = lowestCommonAncestor(root.right, p, q)
//   } else {
//     console.log("got it");
//     ans = root;
//   }
//   console.log(`val: ${root.val}`);
//   console.log(`ans: ${ans}`);
//   return ans;
// }
