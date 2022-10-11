/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  let min1 = Number.POSITIVE_INFINITY, min2 = Number.POSITIVE_INFINITY;

  for (let i=0; i<nums.length; i++) {
    if (nums[i] > min2 ) {
      return true;
    } else if (nums[i] < min2 && nums[i] > min1) {
      min2 = nums[i];
    } else if (nums[i] < min1) {
      min1 = nums[i];
    }
  }

  return false;
};
// console.log(increasingTriplet([1,2,3,4,5]));
// console.log(increasingTriplet([5,4,3,2,1]));
// console.log(increasingTriplet([2,1,5,0,4,6]));
console.log(increasingTriplet([1,2,1,3]));
// console.log(increasingTriplet([1,2,99,100,80,89,101]));