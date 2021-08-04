/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function(height) {
  
  let i = 0, j = height.length - 1, ans = 0;

  while(i < j) {
    ans = Math.max(ans, (j - i) * Math.min(height[i], height[j]));
    (height[i] < height[j]) ? i++: j--;
  }
  
  return ans;
}

console.log(maxArea( [1,8,6,2,5,4,8,3,7]));