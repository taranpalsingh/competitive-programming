/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {

  let max = 0;
  nums = nums.sort((a,b) => a-b);

  for(let i=0; i<nums.length/2; i++) {
      let sum = nums[i] + nums[nums.length-1-i];
      max = Math.max(sum, max);
  }

  return max;
};