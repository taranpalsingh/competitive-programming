/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function(grid) {
    let ans = 0;
    let dp = {};

    var helper = function(leftRow, leftCol, rightRow, rightCol) {

        let cherries = 0;
        // boudary cases;
        if(
            leftRow < 0 || leftRow >= grid.length || leftCol < 0 || leftCol >= grid[0].length ||
            rightRow < 0 || rightRow >= grid.length || rightCol < 0 || rightCol >= grid[0].length
        ) {
            return 0;
        }

        const dpKey = `${leftRow}, ${leftCol}, ${rightRow}, ${rightCol}`;
        if(dp.hasOwnProperty(dpKey)) {
            return dp[dpKey];
        }

        // adding cherries for current row 
        if(leftRow === rightRow && leftCol === rightCol) {
            cherries = grid[leftRow][leftCol];
        } else {
            cherries = grid[leftRow][leftCol] + grid[rightRow][rightCol];
        }

        let maxCherriesFromChildren = 0
        // for loops for recursion
        for(const i of [-1, 0 , 1]) {
            for(const j of [-1, 0 , 1]) {
                maxCherriesFromChildren = Math.max(
                    helper(leftRow + 1, leftCol + i, rightRow + 1, rightCol + j), 
                    maxCherriesFromChildren
                );
            }
        }

        dp[dpKey] = cherries + maxCherriesFromChildren;
        return cherries + maxCherriesFromChildren;
    }
    return helper(0, 0, 0, grid[0].length - 1);
};
