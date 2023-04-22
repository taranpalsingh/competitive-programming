/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
  const len = s.length;
  const dp = new Array(len).fill().map(_ => new Array(len).fill());

  var helper = function(start, end) {
    let res = 0;
    if (dp[start][end] !== undefined)
      return dp[start][end];

    if (start >= end)
      return 0;

    if (s[start] === s[end])
      res = helper(start+1, end-1);
    else
      res = 1 + Math.min(helper(start, end-1), helper(start+1, end));
    
    dp[start][end] = res;
    return dp[start][end];
  }
  return helper(0, len-1);
};