/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let n = prices.length, lMin = prices[0], rMax = prices[n-1];  
  let left = new Array(n).fill(0), right = new Array(n).fill(0);
  let maxProfit = 0;
  // creating left array;
  for (let i=1; i<n; i++) {
    left[i] = Math.max(left[i-1], prices[i] - lMin);
    lMin = Math.min(lMin, prices[i]);
  }
  console.log(left);

  // creating right array;
  for (let i=n-2; i>=0; i--) {
    right[i] = Math.max(right[i+1], rMax - prices[i]);
    rMax = Math.max(rMax, prices[i]);
  }
  console.log(right);

  // adding the profits from left and right to find max profit
  for (let i=0; i<n-1; i++) {
    maxProfit = Math.max(maxProfit, left[i] + right[i+1]);
  }

  // considering the edge cases too for maxProfit
  maxProfit = Math.max(left[n-1], maxProfit, right[0]);

  return maxProfit;
};

console.log(maxProfit([2,3,4,2,1,2,3,2,4]));
console.log(maxProfit(2, [3,2,6,5,0,3]));