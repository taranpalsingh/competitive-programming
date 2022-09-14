/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let jumpsLeft = 0, i = 0, n = nums.length;
  
  while (i < n) {
    console.log(`nums[i]: ${nums[i]}`);

    jumpsLeft = Math.max(jumpsLeft, nums[i]);
    
    // console.log(`i: ${i}`);
    console.log(`jumpsLeft: ${jumpsLeft}`);
    
    if (jumpsLeft >= n-i-1) {
      return true;
    }
    if (jumpsLeft === 0) {
      console.log('inside false--------------');
      return false;
    }
    jumpsLeft--;
    i++;
  }

  if (i === n - 1) {
    return true;
  }
};

console.log(canJump([0]));
console.log(canJump([1,1,0,0]));
// console.log(canJump([2,3,1,1,4]));
// console.log(canJump([3,2,1,0,4]));