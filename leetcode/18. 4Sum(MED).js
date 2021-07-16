/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

var fourSum = function(nums, target) {
  const dp = [];
  const numsLength = nums.length;
  nums = nums.sort((a,b) => a-b);

  for(let i=0; i<numsLength-3; i++) {
    while(nums[i] === nums[i-1] && i>0) {
      i++;
    }
    for(let j=i+1; j<numsLength-2; j++) {
      while(nums[j] === nums[j-1] && j>i+1) {
        j++;
      }

      let left = j + 1;
      let right = numsLength-1;

      while(left<right) {
        let sum = nums[i] + nums[j] + nums[left] + nums[right];
        if(sum < target) {
          left++;
        } else if(sum > target) {
          right--;
        } else {
          // this is a possible answer;
          dp.push([nums[i], nums[j], nums[left], nums[right]]);
          while(nums[left] === nums[left+1]) {
            left++;
          }
          
          while(nums[right] === nums[right-1]) {
            right--;
          }
          left++;
          right--;
        }
      }
    }
  }
  return dp;
}

console.log(fourSum([1,0,-1,0,-2,2], 0));
console.log(fourSum([2,2,2,2,2], 8));
console.log(fourSum([-5,5,4,-3,0,0,4,-2], 4));
console.log(fourSum([1,1,1,2,2,3,3,4,4,4], 9));

// 1st approach, n^4 + target^2
// var fourSum = function(nums, target) {
//   const numLength = nums.length;
//   const results = [], dp = {};

//   var fourSumHelper = function(resultArr, index, target) {

//     if(resultArr.length === 4 && target === 0) {
      
//       if(!dp.hasOwnProperty(resultArr)) {
//         dp[resultArr] = 1;
//         results.push(resultArr);
//       } 
//       return 0;
//     } 

//     // Failure cases
//     if(index >= numLength || resultArr.length > 4 || (resultArr.length === 4 && target != 0)) {
//       return;
//     }

//     for(let i=index; i<nums.length; i++) {
//       fourSumHelper([...resultArr, nums[i]], i+1, target-nums[i]);
//     }
//   }
//   fourSumHelper([], 0, target);
//   return results
// };
