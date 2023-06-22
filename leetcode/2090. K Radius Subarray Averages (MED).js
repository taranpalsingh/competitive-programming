/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
    let sum = 0, arr = [], n = nums.length, windowN = (2*k+1);
    if (n >= windowN) {
        for (let i=0; i<windowN; i++) {
            sum += nums[i];
        }
    }
    // console.log(sum);
    
    for (let i=0; i<n; i++) {
        if ((i < k) || (i >= (n - k))) {
            arr.push(-1);
            continue;
        }
        if (i > k) {
            sum -= nums[i-k-1]
            sum += nums[i+k];        
        }

        // console.log(i, sum);
        let avg = Math.floor(sum/windowN);
        arr.push(avg);
    }
    return arr;
};