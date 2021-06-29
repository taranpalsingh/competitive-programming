/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
  // Will store the indices of zeros that we have flipped.
  // it should not contain more than k values;
  let flippedZerosIndices = [];
  let sum = 0, max = 0;

  for(let i=0; i<nums.length; i++) {
    if(nums[i] === 0) {
      // in case the value of k = 0
      if(k === 0) {
        sum=0;
        continue;
      }
      // if the length of array is less than k, no manipulation needed but sum will increase
      if(flippedZerosIndices.length<k) {
        sum++;
      } else {
        const removedIndex = flippedZerosIndices.shift();
        sum = i-removedIndex;
      }
      flippedZerosIndices.push(i);
    } else {
      // if the value is 1
      sum++;
      max = Math.max(max, sum);
    }
  }
  // in case the last value was 0 and the above else case wasn't executed 
  max = Math.max(max, sum);
  return max;
};


console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1],3));
console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0],2));
console.log(longestOnes([0,0,1,0,0,0,1,0],0));
console.log(longestOnes([0,0,1,1,1,0,0],0));