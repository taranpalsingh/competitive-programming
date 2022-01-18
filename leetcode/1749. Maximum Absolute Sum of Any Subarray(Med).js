/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
  let count = 0, start=0, sum=0, sums=[];
  for(let i=0; i<nums.length; i++) {
    console.log(`current index: ${i}`);
    if(sum+nums[i] > k) {
      console.log("iside sum+nums[i] > k");
      console.log(`start: ${start}`);
      console.log(`sum: ${sum}`);
      while(start!=i) {
        console.log("gotta remove 1 element");
        sum -= nums[start];
        start++;
        if(sum+nums[i] <= k) {
          console.log("Yo!, break it");
          console.log(`sum: ${sum}`);
          console.log(`sum+nums[i]: ${sum+nums[i]}`);
          break;
        }
      }
      console.log(`${start} - ${i}`);
      start = i;
    }
    sum += nums[i];
    if(sum === k) {
      console.log("found one");
      console.log(`start: ${start}`);
      start=i;
      sum=nums[i];
      count++;
      continue;
    }
    console.log(sum);
  }
  return maxSum;
};
