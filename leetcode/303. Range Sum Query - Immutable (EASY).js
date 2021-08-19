/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.cumSum = [0];
  for(let i=1; i<=nums.length; i++) {
      this.cumSum[i] = this.cumSum[i-1] + nums[i-1];
  }
  console.log(this.cumSum);
  return null;
};

/** 
* @param {number} left 
* @param {number} right
* @return {number}
*/
NumArray.prototype.sumRange = function(left, right) {
  return this.cumSum[right+1] - this.cumSum[left];
};

/** 
* Your NumArray object will be instantiated and called as such:
* var obj = new NumArray(nums)
* var param_1 = obj.sumRange(left,right)
*/