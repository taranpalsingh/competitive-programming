/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
  const dp = new Array(questions.length).fill(null);
  var helper  = (index) => {

      if (index >= questions.length)
          return 0;

      if (dp[index] != null)
          return dp[index];

      let best = 0;

      best = Math.max(best, questions[index][0] + helper(index + 1 + questions[index][1]));
      best = Math.max(best, helper(index + 1));

      dp[index] = best;
      return best;
  }
  return helper(0);
  // console.log(dp)
  // return ans;
};