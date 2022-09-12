/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let low = prices[0];
  let maxProfit = 0;
  for (let i=1; i<prices.length; i++) {
      maxProfit = Math.max(maxProfit, prices[i]-low);
      low = Math.min(low, prices[i]);        
  }
  
  return maxProfit;
};