/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const dp = new Array(m).fill().map(_ => new Array(n).fill(null));

  var helper = function(row, col) {
    if (row === m-1 && col === n-1) return 1;
    if (row >= m || col >= n) return 0;
    if (dp[row][col] != null) return dp[row][col];

    dp[row][col] = helper(row + 1, col) + helper(row, col + 1);
    return dp[row][col];
  }

  return helper(0,0);
};
console.log(uniquePaths(3,7));
// console.log(uniquePaths(3,2));
