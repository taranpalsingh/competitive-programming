/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
  let min1=Number.POSITIVE_INFINITY, min2=Number.POSITIVE_INFINITY, max1=Number.NEGATIVE_INFINITY, max2=Number.NEGATIVE_INFINITY;

  for(const num of nums) {
    if(num<min2) {
      if(num<min1) {
        min2 = min1;
        min1 = num;
      } else {
        min2 = num;
      }
    }
    if(num>max1) {
      if(num>max2) {
        max1 = max2;
        max2 = num;
      } else {
        max1 = num;
      }
    }
  }
  return max1*max2-min1*min2;
};

console.log(maxProductDifference([5,6,2,7,4]));

// Took 3 - 3:30 minutes
// naive approach
// var maxProductDifference = function(nums) {
//   nums = nums.sort((a,b) => b-a);
//   console.log(nums);
//   const numLength = nums.length;
//   return (nums[0]*nums[1] - nums[numLength-1]*nums[numLength-2])
// };
