/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(numbers) {
  let permutations = [];
  var helper = function(nums, arr) {
      if (arr.length === numbers.length) {
          permutations.push(arr);
      }
      for (let i=0; i<nums.length; i++) {
          helper([...nums.slice(0,i), ...nums.slice(i+1,nums.length)], [...arr, nums[i]]);
      }
  };
  helper(numbers, []);
  return permutations;
};