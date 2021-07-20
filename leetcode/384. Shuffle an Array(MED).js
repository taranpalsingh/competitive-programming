/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.nums = nums;
  return null;
};

/**
* Resets the array to its original configuration and return it.
* @return {number[]}
*/
Solution.prototype.reset = function() {
  return this.nums;
};

/**
* Returns a random shuffling of the array.
* @return {number[]}
*/
Solution.prototype.shuffle = function() {
  const shuffledNums = [];
  let nums = [...this.nums];

  for(let i=nums.length-1; i>=0; i--) {
    let randomIndex = Math.floor(Math.random()*(i+1));
    let temp = nums[randomIndex];
    nums[randomIndex] = nums[i];
    nums[i] = temp;
  }

  return nums;
};

/** 
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(nums)
* var param_1 = obj.reset()
* var param_2 = obj.shuffle()
*/