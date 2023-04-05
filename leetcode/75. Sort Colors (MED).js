  /**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
  var sortColors = function(nums) {
    var swap = function(i, j) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
    }
  
    let low = 0, mid = 0, high = nums.length-1;
    while (nums[low] === 0){
      low++;
    }
    mid = low;
  
    while (mid <= high) {
      if (nums[mid] === 0) {
        swap(mid++, low++);
      } else if (nums[mid] === 1) {
        mid++;
      } else {
        swap(mid, high--);
      }
    }
    return nums;
  };


console.log(sortColors([2,0,2,1,1,0]));
console.log(sortColors([1,0]));
console.log(sortColors([0]));
console.log(sortColors([2,2,1,0]));