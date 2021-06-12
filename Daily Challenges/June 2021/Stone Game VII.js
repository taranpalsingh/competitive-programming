var stoneGameVII = (stones) => {
  const n = stones.length;
  let sum = 0;
  const dp = [];

  for(let i=0; i<n; i++) {
    dp.push(Array(n).fill(-1));
    sum += stones[i]
  }

  return calculateScore(0, n-1, stones, sum, dp);
};

var calculateScore = (left, right, stones, sum, dp ) => {

  if(left === right) {
    return 0;
  }

  if(right - left === 1) {
    return Math.max(stones[left], stones[right]);
  }

  if(dp[left][right] != -1) {
    return dp[left][right];
  }

  let maxDiff = Math.max(
    sum - stones[left] - calculateScore(left+1, right, stones, sum-stones[left], dp),
    sum - stones[right] - calculateScore(left, right-1, stones, sum-stones[right], dp)
  );

  dp[left][right] = maxDiff;
  return maxDiff;
}
