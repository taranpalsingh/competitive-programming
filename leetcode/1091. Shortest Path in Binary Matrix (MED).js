/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    const rows = grid.length;
    const dirs = [[0,1],[0,-1],[-1,0],[1,0], [-1,-1],[-1,1],[1,-1],[1,1]];
    let q = [[0,0,1]];

    if (grid[0][0] === 1)   return -1;

    while (q.length > 0) {
        const [i,j,d] = q.shift();
        if (i === rows-1 && j === rows-1) {
            return d
        }
        for (const [ni, nj] of dirs) {
            let x = i+ni;
            let y = j+nj;
            
            if (x < 0 || x >= rows) continue;
			if (y < 0 || y >= rows) continue;
			if (grid[x][y] !== 0) continue;

            q.push([x,y, d+1]);
            grid[x][y] = 1;
        }

    }
    return -1;
};
