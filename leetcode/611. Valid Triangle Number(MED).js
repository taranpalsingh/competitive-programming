/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
  nums = nums.sort((a,b) => a-b);
  let count = 0; 

  if(nums.length < 3) {
    return count;
  }

  for(let i = 1; i<nums.length-1; i++) {
    let left = 0, right = i;
    while(left<right) {
      if(nums[left] + nums[right] > nums[i+1]) {
        count += (right-left);
        right--;
      } else {
        left++;
      }
    }
  }
  return count
}

// console.log(triangleNumber([2,3,4]));
// console.log(triangleNumber([2,3,4,4]));
// console.log(triangleNumber([2,2,3,4]));
// console.log(triangleNumber([24,3,82,22,35,84,19]));

// 1st approach, TLE
// var triangleNumber = function(nums) {
//   nums = nums.sort((a,b) => a-b);

//   const result = []; 

//   for(let i = 7; i <= Math.pow(2, nums.length) - 1; i++) {

//     let strI = i.toString(2);
//     strI = ("0".repeat(nums.length - strI.length) + strI).split("");
//     let oneValues = [];

//     strI.forEach((num, index) => {
//       if(+num===1) {
//         oneValues.push(+num * nums[index]);
//       }
//     })

//     if(oneValues.length === 3) {
//       if(oneValues[0] + oneValues[1] <= oneValues[2]) {
//         continue
//       }  
//       result.push(oneValues.join(""))
//     }
//   }

//   return result.length
// };