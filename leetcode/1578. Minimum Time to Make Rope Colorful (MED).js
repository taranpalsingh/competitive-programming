/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
  // let prevTime = neededTime[0];
  let i=0, ans = 0;
  while (i<colors.length) {
    if (colors[i] === colors[i+1]) {
      if (neededTime[i] <= neededTime[i+1]) {
        ans += neededTime[i];
        // console.log(`index: ${i}, ${colors[i]}: ${neededTime[i]}`);
      } else {
        ans += neededTime[i+1];
        // console.log(`index: ${i}, ${colors[i]}: ${neededTime[i]}`);
        neededTime[i+1] = neededTime[i];
      }
    }
    i++;
  }
  return ans;
};

console.log(minCost("abaac", [1,2,3,4,5]));
console.log(minCost( "aabaa", [1,2,3,4,1]));