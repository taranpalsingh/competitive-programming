/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, pre) {
    const obj = {}, visited = {};
    for (let i=0; i<numCourses; i++) {
        obj[i] = [];
    }

    for (const [a,b] of pre) {
        obj[a].push(b);
    }

    let possible = 0;

    var helper = (node) => {
        if (obj[node].length === 0) return true
        if (node in visited) return false;
        
        visited[node] = true;

        for (const req of obj[node]) {
            if (!helper(req)) return false
        }

        obj[node] = [];
        return true;
    }

    for (const node of Object.keys(obj)) {
        helper(node)
    }

    // console.log(obj);
    for (const node of Object.keys(obj)) {
        if (obj[node].length === 0)
            possible++;
    }
    return possible >= numCourses;
};



// console.log(canFinish(2, [[1,0]]));
console.log(canFinish(2, [[1,0],[0,1]]));
// console.log(canFinish());