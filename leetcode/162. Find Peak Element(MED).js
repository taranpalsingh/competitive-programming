/**
 * @param {number[]} nums
 * @return {number}
 */

// 2nd approach, 72ms

var findPeakElement = function(nums) {
  let left = 0, right = nums.length-1;
  nums[right+1] = Number.NEGATIVE_INFINITY;
  while(left<=right) {

    let mid = Math.ceil((left+right)/2);

    if((mid === left && mid === right) || (nums[mid]>nums[mid-1] && nums[mid]>nums[mid+1])) {
      return mid;
    }

    if(nums[mid+1] > nums[mid]) {
      left = mid+1;
    } else if(nums[mid-1] > nums[mid]) {
      right = mid-1;
    }
  }
}


console.log(findPeakElement([2,1,1,4]));
console.log(findPeakElement([0,1,2,3,4]));
console.log(findPeakElement([10,2,1,3,5,6,4]));
console.log(findPeakElement([1]));
console.log(findPeakElement([2,1]));


// 1st approach, 112ms
// var findPeakElement = function(nums) {
  
//   let left = Math.floor(nums.length/2), right = Math.ceil(nums.length/2);

//   if(nums.length===1) {
//     return 0;
//   }

//   console.log("inside while");
//   while(left>=0 || right<=nums.length-1) {
//     console.log(`left: ${left}`);
//     console.log(`right: ${right}`);
//     debugger

//     if(left===0) {
//       if(nums[left] > nums[left+1]) {
//         console.log("found peak using left");
//         return left;     
//       }
//     } else if(nums[left] > nums[left-1]) {
//       if(nums[left] > nums[left+1]) {
//         console.log("found peak using left");
//         return left;     
//       }
//       left--;
//     }
    
//     if(right===nums.length-1) {
//       if(nums[right] > nums[right-1]) {
//         console.log("found peak using right");
//         return right;     
//       }
//     } else if(nums[right] > nums[right+1]) {
//       if(nums[right] > nums[right-1]) {
//         console.log("found peak using right");
//         return right;   
//       }
//       right++;
//     }

//     left--;
//     right++;
//   }
//   console.log("outside");
// };
