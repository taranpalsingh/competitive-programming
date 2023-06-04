/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const n = isConnected.length, visit = new Array(n).fill(false);
    let count = 0;

    var helper = (node) => {
        if(visit[node]) return;
        
        visit[node] = true;
        
        for (let i=0; i<n; i++) {
            if (i===node) continue;
            if (isConnected[node][i] === 1)
                helper(i);
        }
    }

    for (let i=0; i<n; i++) {
        if (visit[i]) continue;        
        helper(i);
        count++;
    }
    return count;
};