/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = (k, n) => {
  const result = [];
  combinationSum3Helper(k, n, [], result);
  return result;
};

var combinationSum3Helper = (k, target, arr, result) => {

  // k has reached limit
  if(k === 0) {
      // && sum has also reached the limit
      if(target === 0) {
          result.push(arr);
      }
      return;
  }

  // sum has already reached whereas the k hasn't
  if(target <= 0) {
      return;
  }

  // finding out the min number to start over the loop
  start = arr.length? arr[arr.length-1]: 1;

  for(let i=start; i<=9; i++) {
      // only distinct elements
      if(arr.includes(i)) {
          continue;
      }

      if(target-i < 0) {
          break;
      } 
      
      combinationSum3Helper(k-1, target-i, [...arr, i], result);
  };    
}

console.log(combinationSum3(3, 7))
// console.log(combinationSum3(3, 9))
// console.log(combinationSum3(4, 1))
// console.log(combinationSum3(3, 2))
// console.log(combinationSum3(9, 45))