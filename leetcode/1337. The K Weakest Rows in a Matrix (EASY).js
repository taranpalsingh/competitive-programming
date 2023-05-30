/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    let arr = new MinPriorityQueue();
    mat.forEach((row, index) => {
        let sum = 0;
        row.forEach(num => sum += num)
        arr.enqueue(index, sum);
    })
    // console.log(arr)
    let ans = []
    while (ans.length <= k) {
        ans.push(arr.dequeue().element)
    }
    return ans;
};