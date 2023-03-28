/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
  // const [dayCost, weekCost, monthCost] = [...costs];
  const dp = {};

  var helper = function (day) {
    if (day === days.length) return 0;
    if (day in dp) return dp[day];

    dp[day] = Number.POSITIVE_INFINITY;

    [1,7,30].forEach((ele, index) => {
      let j = day;
      while (j < days.length && days[j] < days[day] + ele) {
        j++;
      }
      dp[day] = Math.min(dp[day], costs[index] + helper(j));
    });
    return dp[day];
  }

  const ans  = helper(0);
  return ans;
};

console.log(mincostTickets([1,4,6,7,8,20], [2,7,15]));