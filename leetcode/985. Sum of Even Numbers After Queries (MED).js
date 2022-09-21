/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(nums, queries) {

  let sum = 0, sums = [];
  nums.forEach(num => {
    if (num%2 === 0) {
      sum += num;
    }
  })


  queries.forEach(query => {
    const [val, index] = query;
    if (nums[index]%2 === 0) {
      sum -= nums[index];
    }

    nums[index] += val;

    if (nums[index]%2 === 0) {
      sum += nums[index];
    }
    sums.push(sum);
  });
  return sums;
};

console.log(sumEvenAfterQueries([1,2,3,4], [[1,0],[-3,1],[-4,0],[2,3]]));
console.log(sumEvenAfterQueries([1], [[4,0]]));