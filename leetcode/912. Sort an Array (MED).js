/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  var mergeSort = function(nums) {
    if (nums.length === 1)
      return nums;

    const sorted1 = mergeSort(nums.slice(0, Math.ceil(nums.length/2)));  
    const sorted2 = mergeSort(nums.slice(Math.ceil(nums.length/2), nums.length));  
    
    let i = 0, j=0;
    let sorted = [];
    while (i < sorted1.length || j < sorted2.length) {
      
      if (i === sorted1.length) {
        sorted.push(sorted2[j++]);
        continue;
      } else if (j === sorted2.length) {
        sorted.push(sorted1[i++]);
        continue;
      }

      if (i < sorted1.length && j < sorted2.length) {
        if (sorted1[i] < sorted2[j])
          sorted.push(sorted1[i++]);
        else
          sorted.push(sorted2[j++]);
      }
    }
    return sorted;
  }
    
  return mergeSort(nums);
};

console.log(sortArray([5,2,3,1]));
console.log(sortArray([5,1,1,2,0,0]));
// console.log(sortArray());
// console.log(sortArray());