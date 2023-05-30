/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    const obj = {};
    arr.forEach(num => {
        obj[num] = (num in obj)? obj[num]+1: 1;
    })

    let queue = new MaxPriorityQueue();
    for (const k of Object.keys(obj)) {
        queue.enqueue(k, obj[k])
    }

    let count = 0, newArrSize = 0;
    while (newArrSize < arr.length/2) {
        newArrSize += queue.dequeue().priority;
        count++
    }
    return count;
};