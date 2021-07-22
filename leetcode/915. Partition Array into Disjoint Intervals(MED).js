/**
 * @param {number[]} nums
 * @return {number}
 */

 
var partitionDisjoint = function(nums) {
  let max = Array(nums.length).fill(0), min = Array(nums.length).fill(0), maxValue = nums[0], minValue = nums[nums.length-1];

  for(let i=0; i<nums.length; i++) {
    maxValue = Math.max(maxValue, nums[i]);
    max[i] = maxValue
  }

  // console.log(max);

  for(let i=nums.length-1; i>=0; i--) {
    minValue = Math.min(minValue, nums[i]);
    min[i] = minValue
  }

  // console.log(min);
  for(let i=0; i<nums.length-1; i++) {
    if(max[i] <= min[i+1]) {
      return i+1;
    }
  }
}


console.log(partitionDisjoint([1,1,1,0,6,12]));
console.log(partitionDisjoint([5,0,3,8,6]));
console.log(partitionDisjoint([0,2,4,1,4,5,6,7,6,7]));

// var partitionDisjoint = function(nums) {
//   let max = [], leftCount = [], maxValue = Number.NEGATIVE_INFINITY, maxValueleftCount = null;

//   nums.forEach((num, index) => {

//     console.log(`num: ${num}`);

//     if(max.length === 0) {
      
//       if(num > maxValue) {
//         max.push(num);
//         leftCount.push(index);
//       }

//     } else {


//       for(let i=0; i<max.length; i++) {
//         // num is greatest till now;
//         if(num > max[i]) {
//           max.push(num);
//           leftCount.push(index);
//         }
//         // compare with all max values till now and remove the ones ;
//         else if(num < max[i]) {
//           console.log("num < max[i]");
//           console.log(i);
//           console.log(max.length);
//           max = max.slice(i+1, max.length);
//           leftCount = leftCount.slice(i+1, max.length);
//         }
//         else 
//           continue
        
//       }
//     }

//     if(maxValue < num) {
//       maxValue = num;
//       // maxValueleftCount = index;
//     }

//     console.log(max);
//     console.log(leftCount);
//   })

//   return leftCount[0];
// };
