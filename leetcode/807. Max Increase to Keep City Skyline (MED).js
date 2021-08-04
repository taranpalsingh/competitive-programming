/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
  const cols = Array(grid[0].length).fill(0), rows = [];
  let total = 0;
  
  for(let i=0; i<grid.length; i++) {
    rows[i] = Math.max(...grid[i]);
    for(let j=0; j<grid[0].length; j++) {
      cols[j] = Math.max(cols[j], grid[i][j]);
    }
  }

  for(let i=0; i<grid.length; i++) {
    for(let j=0; j<grid[0].length; j++) {
      total += Math.min(rows[i], cols[j]) - grid[i][j];
    }
  }

  return total
};

console.log(maxIncreaseKeepingSkyline([[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]));