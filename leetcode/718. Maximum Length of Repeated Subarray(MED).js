/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
  const dp = Array();
  
  dp.push(Array(nums1.length+1).fill(0))

  let max = 0;
  for(let i=1; i<=nums2.length; i++) {
    dp.push(Array(nums1.length+1).fill(0))
    for(let j=1; j<=nums1.length; j++) {
      if(nums2[i-1]===nums1[j-1]) {
        dp[i][j] = dp[i-1][j-1]+1;
        max = Math.max(max, dp[i][j]);
      }
    }
  }
  console.log(dp);
  return max;
};

console.log(findLength([1,2,3,2,1], [3,2,1,4,7]));