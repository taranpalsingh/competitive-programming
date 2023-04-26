/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numberOfArrays = function(s, k) {
  const dp = {};
  var isValid = function(num) {
    const n = Number(num);
    return !isNaN(n) && n >= 1 && n <= k;
  }
  
  var helper = function(str) {
    // console.log(str);
    if (str in dp) return dp[str];
    if (str.length === 1)
      return 1;
    let count = 0;
    for (let i=1; i<str.length; i++) {
      const first = str.slice(0, i);
      const second = str.slice(i, str.length);
      if (isValid(first) && isValid(second))  {
        // count = helper(first) + helper(second) + 1;
        count = helper(first) + helper(second) + (isValid(str)? 1:0);
      }
    }
    dp[str] = count;
    return dp[str];
  }
  
  const ans = helper(s) * (isValid(s)? 1:0);
  // const ans = helper(s);
  console.log(dp);
  return ans;
};

// console.log(numberOfArrays("1000", 10000));
// console.log(numberOfArrays("1000", 10));
console.log(numberOfArrays("1317", 2000));
// console.log(numberOfArrays("131777", 10000000));




// console.log(isValid("1000"));
// console.log(isValid("00"));
// console.log(isValid("000"));
// console.log(isValid("3"));
// console.log(isValid("30"));