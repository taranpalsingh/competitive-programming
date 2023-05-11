/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function(nums1, nums2) {
    
  const dp = new Array(nums1.length).fill().map(_ => new Array(nums2.length).fill(null));

  var helper = (i1, i2) => {
   
    if (i1 >= nums1.length || i2 >= nums2.length)
        return 0;
    if (dp[i1][i2] != null)
        return dp[i1][i2];
    let best = 0;

    if (nums1[i1] === nums2[i2]) {
        best = Math.max(best, 1 + helper(i1 + 1, i2 + 1));
    }
    best = Math.max(best, helper(i1 + 1, i2));
    best = Math.max(best, helper(i1, i2 + 1));
    dp[i1][i2] = best;
    return best;
  }

  return helper(0, 0);
  return best;

};
// console.log(maxUncrossedLines([1,4,2], [1,2,4]));
console.log(maxUncrossedLines([1,3,7,1,7,5], nums2 = [1,9,2,5,1]));
// console.log(maxUncrossedLines([2,5,1,2,5], [10,5,2,1,5,2]));