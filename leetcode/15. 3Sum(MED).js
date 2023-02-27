
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var threeSum = function(nums) {
  nums = nums.sort((a, b) => a-b);
  let ans = [];

  for (let i = 0; i < nums.length - 2; i++) {
    let target = -nums[i];
    let start = i+1, end = nums.length-1;

    while (start < end) {
      let sum = nums[start] + nums[end];
      if (sum === target) {
        ans.push([nums[i], nums[start], nums[end]]);
        while (start < nums.length - 1 && nums[start] === nums[start + 1]) 
          start++;
        while (end > i+1 && nums[end] === nums[end - 1]) 
          end--;
        start++;
        end--;
      } else if (sum < target) {
        while (start < nums.length - 1 && nums[start] === nums[start + 1]) 
          start++;
        start++;
      } else {
        while (end > i+1 && nums[end] === nums[end - 1]) 
          end--;
        end--;
      }
    }

    while (i < nums.length-2 && nums[i] === nums[i+1])
      i++;
  }

  return ans;
};