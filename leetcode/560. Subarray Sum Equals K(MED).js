/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let count = 0, sum=0, sums={};
  sums[0] = 0;
  for(let i=0; i<nums.length; i++) {
    sum += nums[i];

    if(sums.hasOwnProperty(sum-k)) {
      count += sums[sum-k];
    }

    sums[sum] = sums.hasOwnProperty(sum) ? +sums[sum]+1: 1;
  }
  return count;
};

console.log(subarraySum([1,1,1],2));
console.log(subarraySum([3,4,7,2,-3,1,4,2],7));
console.log(subarraySum([-1,-1,1],0));

// var subarraySum = function(nums, k) {
//   let count = 0, start=0, sum=0, sums=[];
//   for(let i=0; i<nums.length; i++) {
//     console.log(`current index: ${i}`);
//     // if(sum+nums[i] > k) {
//     if(Math.abs(k - sum+nums[i]) > Math.abs(k - sum)) {
//       console.log("iside sum+nums[i] > k");
//       console.log(`start: ${start}`);
//       console.log(`sum: ${sum}`);
//       while(start!=i) {
//         console.log("gotta remove 1 element");
//         sum -= nums[start];
//         start++;
//         if(sum+nums[i] <= k) {
//           console.log("Yo!, break it");
//           console.log(`sum: ${sum}`);
//           console.log(`sum+nums[i]: ${sum+nums[i]}`);
//           break;
//         }
//       }
//       console.log(`${start} - ${i}`);
//       start = i;
//     }
//     sum += nums[i];
//     if(sum === k) {
//       console.log("found one");
//       console.log(`start: ${start}`);
//       start=i;
//       sum=nums[i];
//       count++;
//       continue;
//     }
//     console.log(sum);
//   }
//   return count;
// };


// var subarraySum = function(nums, k) {
//   console.log(nums);
//   let count = 0, newStart=0, sum=nums[0], sums=[];
//   for(let i=1; i<nums.length; i++) {
//     console.log(`current index: ${i}`);
//     if(sum < nums[i]) {
//       console.log("gotta break the chain");
//       console.log(`${newStart} - ${i}`);
//       sums.push(sum);
//       newStart = i;
//       sum = nums[i];
//     } else {
//       sum += nums[i];
//     }
//   }
//   if(sum!=0) {
//     sums.push(sum)
//   }
//   console.log(sums);
//   return count;
// };