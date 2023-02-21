/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  let low = 0, high = nums.length-1;

  while (low <= high) {
      let mid = Math.round((low+high)/2);

      if (nums[mid] != nums[mid-1] && nums[mid] != nums[mid+1]) {
          return nums[mid];
      }

      if (
        ((mid % 2 != 0) && (nums[mid] === nums[mid - 1]) || 
        ((mid % 2 === 0) && (nums[mid] === nums[mid + 1])))
        ) {
            low = mid + 1;
      } else {
          high = mid - 1;
      }
  }

    return -1;
};