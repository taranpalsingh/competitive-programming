/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const arr = [[]];

  var helper = function(subArr, index, k) {
    if (k === 0) arr.push(subArr);

    for (let i=index; i<nums.length; i++) {
      helper([...subArr, nums[i]], i+1, k-1);
    }
    return subArr;
  }

  for (let len=0; len<nums.length; len++) { // length of subArr
    for (let i=0; i<nums.length - len; i++) { 
      helper([nums[i]], i+1, len);
    }
  }
  return arr;
};