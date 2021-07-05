/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
  const newNums = [];
  for(let i=0; i<nums.length;i++) {
      newNums[i] = nums[nums[i]]
  }
  return newNums;
};