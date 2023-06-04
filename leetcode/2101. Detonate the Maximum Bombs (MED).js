/**
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation = function(bombs) {
    const n = bombs.length
    if (n <= 1) return n
    const adj = new Array(n).fill(0).map(a => [])

    const checkRange = ([x1, y1, r1], [x2, y2, r2]) => {
        const dist = (x1 - x2)**2 + (y1 - y2)**2
        return [r1**2 >= dist, r2**2 >= dist]
    }

    for (let i=0; i<n; i++) {
        for (let j=i+1; j<n; j++) {
            const [hitsJ, hitsI] = checkRange(bombs[i], bombs[j])
            if (hitsJ) adj[i].push(j)
            if (hitsI) adj[j].push(i)
        }
    }

    let max = 0
    const dfs = (node, visited = new Set()) => {
        visited.add(node)
        let bomb = 1
        for (let next of adj[node]) {
            if (!visited.has(next)) {
                bomb += dfs(next, visited)
            }
        }
        max = Math.max(max, bomb)
        return bomb
    }

    for (let i=0; i<n; i++) dfs(i)
    return max
};

// console.log(maximumDetonation([[2,1,3],[6,1,4]]));
// console.log(maximumDetonation([[1,1,5],[10,10,5]]));
console.log(maximumDetonation([[1,2,3],[2,3,1],[3,4,2],[4,5,3],[5,6,4]]));