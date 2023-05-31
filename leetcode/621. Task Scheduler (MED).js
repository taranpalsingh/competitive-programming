/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let q = new MaxPriorityQueue(), occurences = {}, count = 0;
    
    tasks.forEach(task => {
        occurences[task] = task in occurences? occurences[task]+1: 1;
    })
    for(const task of Object.keys(occurences)) {
        q.enqueue(occurences[task]);
    }

    let queue = [];
    while(q.size() || queue.length) {
        if (q.size()) {
            const top = q.dequeue().element;
            if (top - 1 > 0)
                queue.push([top-1, count+n]);            
        }

        count++;
        while (queue.length && queue[0][1] < count) {
            const newElement = queue.pop();
            q.enqueue(newElement[0]);
        }
    }
    return count;
};