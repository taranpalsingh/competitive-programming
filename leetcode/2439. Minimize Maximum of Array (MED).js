/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeArrayValue = function(nums) {
 
  var isPossible = function(target, arr) {
    for (let i=0; i<arr.length-1; i++) {
      if (arr[i] > target) return false;
      if (arr[i] < target) {
        arr[i+1] -= (target - arr[i]);
      }
      // console.log(nums);
    }

    return arr[arr.length-1] < target;
  }



  let l = 0, r = Math.max(...nums), ans = r;

  // while (l < r) {
  //   let mid = Math.floor((l+r)/2);
  //   console.log(mid)
  //   if (isPossible(mid, [...nums])) {
  //     ans = mid;
  //     r = mid;
  //   } else {
  //     l = mid + 1;
  //   }
  // }
  // for (let i=1; i<=maxVal; i++) {
  //   // console.log(i);
  //   if (isPossible(i, [...nums])) {
  //     return i;
  //   } 
  // }

  console.log(isPossible(8, nums));
  return ans;
};

// console.log(minimizeArrayValue([3,7,1,6]));
console.log(minimizeArrayValue([6,9,3,8,14]));
// console.log(minimizeArrayValue([13,13,20,0,8,9,9]));