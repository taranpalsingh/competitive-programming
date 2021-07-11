/**
 * @param {number[]} nums
 * @return {number}
 */

// 2nd Approach, 180ms
var lengthOfLIS = function(nums) {
  
  const dp = Array(nums.length).fill(1);

  for(let i=0; i<nums.length; i++) {
    for(let j=i-1; j>=0; j--) {
      if(j<dp[i]-1) {
        break;
      }
      if(nums[j]<nums[i]) {
        dp[i] = Math.max(dp[i], dp[j]+1)
      }
    }
  }
  // console.log(dp);
  return Math.max(...dp);
}

console.log(lengthOfLIS([1,2,1,2,1,2,1,2]));
console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));
console.log(lengthOfLIS([0,1,0,3,2,3]));
console.log(lengthOfLIS([7,7,7,7,7,7,7]));

// 1st approach, 700ms
// var lengthOfLIS = function(nums) {
  
//   let maxSmallerNumsCount = 0;
//   const smallerNumsCount = {};
//   for(let i=0; i<nums.length; i++) {
//     let currSmallerNumsCount = 0;
    
//     for(let j=i-1; j>=0; j--) { if(j<currSmallerNumsCount) {
//         break;
//       }
//       if(nums[j]<nums[i]) {
//         currSmallerNumsCount = Math.max(currSmallerNumsCount, smallerNumsCount[nums[j]]+1)
//       }
//     }
//     smallerNumsCount[nums[i]] = (smallerNumsCount.hasOwnProperty(nums[i])) ?  
//                     Math.max(smallerNumsCount[nums[i]], currSmallerNumsCount) : 
//                     currSmallerNumsCount;
//     maxSmallerNumsCount = Math.max(maxSmallerNumsCount, smallerNumsCount[nums[i]]);
//   }
//   // +1: in order to count the element itself that has the max nums smaller than it.
//   return maxSmallerNumsCount+1;
// }