/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function(amount) {
    let queue = new MaxPriorityQueue();
    amount.forEach((amt) => {
        if (amt > 0)
            queue.enqueue(amt)
    });

    let ans = 0;
    while (queue.size() > 1) {
        let first = queue.dequeue().element;
        let second = queue.dequeue().element;
        first--;
        second--;
        if (first > 0)
            queue.enqueue(first);
    
        if (second > 0)
            queue.enqueue(second);
        ans++;
    }
    if (queue.size() === 1)
        return ans + queue.dequeue().element;
    return ans;
};