/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function(satisfaction) {
  satisfaction = satisfaction.sort((a,b) => a-b);
  let sum = 0, i;
  for (i = satisfaction.length-1; i>=0; i--) {
      sum += satisfaction[i];
      if (sum < 0) {
          break;
      }
  }
  if (i != satisfaction.length-1)
      i++;
  else
      return 0; 

  sum = 0;
  for (let j=i; j < satisfaction.length; j++) {
      sum += (j-i+1)*satisfaction[j];
  }
  return sum;
};