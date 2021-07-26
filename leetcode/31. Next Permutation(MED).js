/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var nextPermutation = function(nums) {
  
  let foundIt = false, index = null;

  var reverseArr = (start, end) => {
    while(start < end) {
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  }

  for(let i=nums.length-1; i>0; i--) {

    if(nums[i] > nums[i-1]) {

      let indexFound = false, min = Infinity, minIndex = nums.length-1;
      for(let j=nums.length-1; j>=i; j--) {
        if(nums[j] > nums[i-1]) {
          index = j;
          indexFound = true;
          break;
        } else if(nums[j] > nums[i] && min > nums[j]) {
          min = nums[j];
          minIndex = j;
        }        
      }

      if(!indexFound) {
        index = minIndex;
      }
      let temp = nums[i-1];
      nums[i-1] = nums[index];
      nums[index] = temp;
      reverseArr(i, nums.length-1)
      foundIt = true;
      return;
    }
  }

  nums = nums.sort((a,b) => a-b);
};


// nextPermutation([1,2,5,4,3]);
// nextPermutation([1,1,5]);
// nextPermutation([3,2,1]);
// nextPermutation([1,2,3]);
nextPermutation([2,3,1]);