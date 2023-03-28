/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const width = grid[0].length, height = grid.length;
  const dp = new Array(height).fill().map(_ => new Array(width).fill(null));

  var helper = function(i, j) {
    if (dp[i][j] != null) return dp[i][j];
    if (i - 1 < 0 && j-1 < 0) return grid[i][j];

    if (j - 1 < 0) 
      ans = helper(i-1, j);
    else if (i - 1 < 0) 
      ans =  helper(i, j-1);
    else 
      ans = Math.min(helper(i, j-1), helper(i-1, j));
    
    dp[i][j] = grid[i][j] + ans;
    return dp[i][j];
  } 
  return helper(height-1,width-1);
};

console.log(minPathSum([[1,2,3],[4,5,6]]));