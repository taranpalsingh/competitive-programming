/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const obj = {};
    nums.forEach(num => {
        obj[num] = num in obj? obj[num]+1: 1;
    })
    let arr = [];
    for (const num of Object.keys(obj)) {
        arr.push([num, obj[num]]);
    }
    arr = arr.sort((a,b) => b[1]-a[1]);
    arr = arr.map(ele => ele[0]);
    return arr.slice(0,k)
};