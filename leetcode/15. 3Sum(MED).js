/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// not the best
var threeSum = function(nums) {
  
  const results = {}, ans = [];
  nums = nums.sort((a,b) => a-b);

  for(let i=0; i<nums.length-2; i++) {

    while(i>0 && nums[i] === nums[i-1]) {
      i++;
      continue;
    }

    let left = i+1, right = nums.length-1;
    while(left< right) {
      const sum = nums[i] + nums[left] + nums[right];

      if(sum === 0) {
        const result = [nums[i], nums[left], nums[right]];
        if(!results.hasOwnProperty(result)) {
          ans.push(result);
          results[result] = 1;
        }
        if(left+1 < right) {
          right--;
        } else {
          break;
        }
      } else if(sum < 0) {
        while(nums[left] === nums[left+1]) {
          left++;
          continue;
        }
        left++;
      } else {
        while(nums[right] === nums[right-1]) {
          right--;
          continue;
        }
        right--;
      }
    }
  }

  return ans;
};