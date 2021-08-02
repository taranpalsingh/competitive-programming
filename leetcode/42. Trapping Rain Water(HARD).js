/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(heights) {
  
  const leftMaxHeights = [], rightMaxHeights = Array(heights.length);
  let ans = 0, max = -Infinity, min = Infinity;

  heights.forEach(height => {
    max = Math.max(max, height);
    leftMaxHeights.push(max);
  })

  max = -Infinity;
  for(let i = heights.length - 1; i>=0; i--) {
    max = Math.max(max, heights[i]);
    rightMaxHeights[i] = max;
  }

  console.log(leftMaxHeights);
  console.log(rightMaxHeights);
  
  heights.forEach((height, index) => {
    min = Math.min(leftMaxHeights[index], rightMaxHeights[index]);
    ans += min - height;
  })

    return ans;
};

