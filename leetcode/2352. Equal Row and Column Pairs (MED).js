/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const rowMap = new Map(), n = grid.length;
    // row Map
    for (let i=0; i<n; i++) {
        let str = '';
        for (let j=0; j<n; j++)
            str += ''+grid[i][j] + '_';
        rowMap.set(str, rowMap.has(str)? rowMap.get(str)+1: 1);
    }
    let ans = 0;

    // col Map
    for (let i=0; i<n; i++) {
        let str = '';
        for (let j=0; j<n; j++)
            str += ''+grid[j][i] + '_';
        if (rowMap.has(str))
            ans += rowMap.get(str);
    }

    return ans;
};