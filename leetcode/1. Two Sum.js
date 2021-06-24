/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const obj = {};
    
    for(let i=0; i<nums.length; i++) {
        const complementaryNum = target-nums[i];
        if(obj.hasOwnProperty(complementaryNum)) {
            return [i, obj[complementaryNum]]
        }
        obj[nums[i]] = i;
    }
};