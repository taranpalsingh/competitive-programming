
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const dp = {};
  var helper = function(n) {
      if (n < 0)
          return 0;
      if (dp.hasOwnProperty(n)) {
          return dp[n];
      }
      if (n === 0) {
          dp[n] = 1;
          return 1;
      }
      dp[n-1] = helper(n-1);
      dp[n-2] = helper(n-2);
      return dp[n-1] + dp[n-2];
  }
  return helper(n-1) + helper(n-2);
};

