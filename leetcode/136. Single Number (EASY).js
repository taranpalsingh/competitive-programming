/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const obj = {};
  nums.forEach(num => {
      if (obj.hasOwnProperty(num)) {
          delete obj[num];
      } else {
          obj[num] = 1;
      }
  })
  const num = Object.keys(obj);
  return num[0]
};