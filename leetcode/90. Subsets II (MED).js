/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//  2nd attempt
var subsetsWithDup = function(nums) {
  
  nums = nums.sort((a,b) => a-b);
  const results = [[]];

  var subsetsWithDupHelper = function(arr, index) {

    if(index === nums.length) {
      return;
    }

    while(index < nums.length) {
      results.push([...arr, nums[index]])
      subsetsWithDupHelper([...arr, nums[index]], index + 1)
      while(nums[index] === nums[index+1]) {
        index++;
      }
      index++
    }
  }

  subsetsWithDupHelper([], 0);
  return results
};

// 1st attempt
// var subsetsWithDup = function(nums) {
  
//   nums = nums.sort((a,b) => a-b);
//   const subsetObj = {}, results = [];
//   for(let i = 0; i < Math.pow(2, nums.length); i++) {
//     const str = [...nums].filter((num, index) => (i >> index) & 1);
//     if(!results.includes(str)) {
//       results.push(str)
//     }
//   }
//   return results
// };


console.log(subsetsWithDup([4,4,4,1,4]));
console.log(subsetsWithDup([1,2,2]));