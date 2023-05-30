/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const obj = {};
    s.split('').forEach(char => {
        obj[char] = (char in obj)? obj[char]+1: 1;
    })

    let queue = new MaxPriorityQueue();
    for (const k of Object.keys(obj)) {
        queue.enqueue(k, obj[k])
    }
    let ans = ''
    while (queue.size()) {
        const ele = queue.dequeue();
        ans += new Array(ele.priority).fill(ele.element).join('');
    }
    return ans;
};