/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
var maxValue = function(n, index, maxSum) {
    let ans = 1;
    maxSum -= n;
    let left = 0, right = 0;
    let maxLeft = index, maxRight = n - index - 1;
  
  
    while (maxSum > 0) {
      ans++;
      let leftVal = Math.min(left++, maxLeft)
      let rightVal = Math.min(right++, maxRight)
      maxSum -= (1 + leftVal + rightVal);
      if (leftVal === maxLeft && rightVal === maxRight)
        break;
    }   
  
    if (maxSum > 0) {
      ans += Math.floor(maxSum/n);
    }
    return maxSum < 0? ans-1: ans;
  };
  
  // var maxValue = function(n, index, maxSum) {
  //   let minVal = Math.floor(maxSum/n);
  //   let ans = minVal, sum = minVal*n, maxIncrease = Math.min(index, n-index);
  //   let rippleCount = 1;
  //   while (maxIncrease >= 0) {
  //     sum += rippleCount
  //     if (sum > maxSum)
  //       break;
  //     ans++;
  //     rippleCount += 2;
  //     maxIncrease--;
  //   }   
  //   return ans;
  // };