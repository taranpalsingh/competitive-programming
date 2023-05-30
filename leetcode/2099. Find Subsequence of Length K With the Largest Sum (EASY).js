/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
    let queue = new MaxPriorityQueue(), arr = [];
    nums.forEach((num, i) => {
        queue.enqueue(i, num);
    })
    for (let i=0; i<k; i++) {
        const ele = queue.dequeue();
        arr.push([ele.element, ele.priority]);
    }
    console.log(arr);
    return arr.sort((a,b) => a[0]-b[0]).map(a => a[1]);
};