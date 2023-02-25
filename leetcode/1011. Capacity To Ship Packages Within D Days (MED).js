/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
  let low = Math.max(...weights);
  let high = weights.reduce((partialSum, a) => partialSum + a, 0);
  let minW, ans;

  while (low <= high) {

      minW = Math.floor((low+high)/2);
      let currDay = 0, dayCount = 1;

      for (let i=0; i<weights.length; i++) {
          if (currDay + weights[i] <= minW) {
              currDay += weights[i];
          } else {
              dayCount++;
              currDay = weights[i];
          }
          if (dayCount > days) {
              break;
          }
      }
      if (dayCount > days) {
          low = minW+1;
      } else {
          ans = minW;
          high = minW-1;
      }
  }
  
  return ans;
};