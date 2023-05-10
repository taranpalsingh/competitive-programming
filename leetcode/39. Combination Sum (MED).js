/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(nums, target) {
  nums = nums.sort((a,b) => a-b);
  nums = [...new Set(nums)];
  console.log(nums);

  let ans = [];
  var helper = (index, targetLeft, arr) => {
  
    if (targetLeft === 0) {
      ans.push(arr);
    }

    for (let i=index; i<nums.length; i++) {
      if (nums[i] > targetLeft)
        break;
      helper(i, targetLeft - nums[i], [...arr, nums[i]]);
    }
  }

  nums.forEach((num, index) => {
    helper(index, target - num, [num]);
  })

  return ans;
};

console.log(combinationSum([2,3,5], 8));