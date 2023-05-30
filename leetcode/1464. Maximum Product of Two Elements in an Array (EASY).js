/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let queue = new MaxPriorityQueue();
    nums.forEach(num => queue.enqueue(num));
    const first = queue.dequeue().element
    const second = queue.dequeue().element
    return (first-1)*(second-1)
};