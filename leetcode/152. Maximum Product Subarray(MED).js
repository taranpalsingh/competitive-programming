/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let result = Math.max(...nums)
    
    let currMax = 1
    let currMin = 1
    
    // console.log(result);
    for (const num of nums) {
        if (num === 0) {
            currMax = 1
            currMin = 1
            continue;
        }
        
        let maxTemp = currMax;
        currMax = Math.max(num*currMax, num*currMin, num);
        currMin = Math.min(num*maxTemp, num*currMin, num);
        
        result = Math.max(result, currMax);
        // console.log(result);
    }
    return result
};
