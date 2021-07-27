/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var threeSumClosest = function(nums, target) {
  
  nums = nums.sort((a,b) => a-b);
  let ans = Infinity;

  for(let i=0; i<nums.length-2; i++) {
    
    let left = i+1, right = nums.length-1;
    while(left< right) {
      const sum = nums[i] + nums[left] + nums[right];

      if(target === sum) {
        return target;
      } else if(target > sum) {
        left++;
      } else {
        right--;
      }

      if(Math.abs(target - ans) > Math.abs(target - sum)) {
        ans = sum;
      }
    }
  }
  return ans;
};
// console.log(threeSumClosest2([-55,-24,-18,-11,-7,-3,4,5,6,9,11,23,33], 0));
// console.log(threeSumClosest([-55,-24,-18,-11,-7,-3,4,5,6,9,11,23,33], 0));  // -11, 5, 6
// console.log(threeSumClosest([-1,2,1,-4], 1));
// console.log(threeSumClosest([-1,2,1,-4,-1,0,10,0,0], 4));