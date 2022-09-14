/**
 * @param {TreeNode} root
 * @return {number}
 */
var pseudoPalindromicPaths  = function(root) {

  let count = 0, digits = new Array(10).fill(0);
  var isPseudoPalindrome = function(digits) {
    let odd = 0;
    for (let i=0; i<10; i++) {
      if (digits[i]%2 != 0) {
        odd++;
      }
    }
    return odd <= 1;
  }
  

  var findPaths = function(root, digits) {

    digits[root.val]++;
    if (root.left != null) {
      findPaths(root.left, digits);
    } 
    if (root.right != null) {
      findPaths(root.right, digits);
    } 
    if (root.left === null && root.right === null) {
      if(isPseudoPalindrome(digits)) {
        count++;
      }
    }
    digits[root.val]--;
  }

  findPaths(root, digits);
  return count;
};



console.log(isPseudoPalindrome([0,0,0,0,1,0,1]));
// console.log(isPseudoPalindrome([1]));