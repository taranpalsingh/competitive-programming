/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function(nums, left, right) {
    
  let count = 0;
  const n = nums.length;
  let start = 0, window = 0;
  // for reference, https://www.youtube.com/watch?v=ZIJFMQzrNVY
  for(let end=0; end<n; end++) {
      if(nums[end] > right) {
          window = 0;
          start = end+1;
          continue;
      } 
      if(nums[end] >= left) {
          window = end-start+1;
      }
      count += window;
  }
  return count;
};

// console.log(numSubarrayBoundedMax([2, 1, 4, 3], 2, 3))
// console.log(numSubarrayBoundedMax([1,4,2,6,2,3,8,5,2], 3, 5));