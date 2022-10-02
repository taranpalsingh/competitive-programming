/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(n, k, target) {
  const dp = {}, mod = 1000000007;
  
  var helper = function(n, target) {

    let score = 0;

    if (target === 0 && n === 0) {
      return 1;
    } else if (target < 0 || n < 0) {
      return 0;
    } 

    if (dp.hasOwnProperty(`${n},${target}`)) {
      return dp[`${n},${target}`];
    }


    for (let i=1; i<=k; i++) {
      if (i <= target) {
        score += (helper(n-1, target-i))%mod;
      }
    }
    dp[`${n},${target}`] = score;
    return score;
  }

  return helper(n, target)%mod;
};

// console.log(numRollsToTarget(2,6,7));
console.log(numRollsToTarget(30,30,500));
// console.log(numRollsToTarget());