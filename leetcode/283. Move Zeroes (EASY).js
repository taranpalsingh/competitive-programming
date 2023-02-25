/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 
var moveZeroes = function(nums) {
  let nonZeroIndex = 0;
  for (let i=0; i<nums.length; i++) {
      if (nums[i] != 0) {
          nums[nonZeroIndex++] = nums[i];
          continue;
      }
  }
  for (let i=nonZeroIndex; i<nums.length; i++) {
      nums[i] = 0;
  }
}

// 2nd
// var moveZeroes = function(nums) {

//     let zerosFromEnd = 0;
//     let i = nums.length-1;
//     while (i>=0) {
//         if (nums[i] != 0) break;
//         zerosFromEnd++;
//         i--;
//     }
  
//     for (let i=0; i<nums.length-zerosFromEnd; i++) {
//         if (nums[i] != 0) continue;
//         let temp = nums[i];
//         for (let j=i; j<nums.length-1; j++) {
//             nums[j] = nums[j+1];
//         }
//         zerosFromEnd++;
//         nums[nums.length-1] = temp;
//         i--;
//     }

// }
