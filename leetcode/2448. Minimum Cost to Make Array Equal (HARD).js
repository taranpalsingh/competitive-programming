/**
 * @param {number[]} nums
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function(nums, cost) {
    const n = nums.length;
    let arr = [], weightedCount = 0;
    for (let i=0; i<n; i++) {
        weightedCount += cost[i];
        arr.push([nums[i], cost[i]]);
    }
    arr = arr.sort((a,b) => a[0]-b[0])
    let med = 0, index = 0;
    while (index <= n && med <= Math.floor(weightedCount)/2) {
        med += arr[index][1];
        index++;
    }
    let median = arr[Math.max(index-1, 0)][0];

    let ans = 0;
    for (let i=0; i<n; i++) {
        ans += arr[i][1] * Math.abs(median - arr[i][0]);
    }
    return ans;
};