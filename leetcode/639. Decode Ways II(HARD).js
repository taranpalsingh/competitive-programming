/**
 * @param {string} s
 * @return {number}
 */
var decodeChar = function(char) {

  if(char === '*') {
    return 9;
  } else if(char === '0') {
    return 0;
  }
  return 1;
}

var decodeTwoChars = function(first, second) {

  switch(first) {
    case '*':
      if(second === '*') {
        return 15;
      } else if(second >= '0' && second <= '6') {
        return 2;
      } else {
        return 1;
      }
      
    case '1':
      if(second === '*') {
        return 9;
      } else {
        return 1;
      } 
    
    case '2': 
      console.log("here");
      if(second === '*') {
        return 6;
      } else if(second >= '0' && second <= '6') {
        return 1;
      } else {
        return 0;
      } 
    default:
      return 0;
  }
}

var numDecodings = function(s) {
  const dp = Array(s.length+1);
  dp[0] = 1;
  dp[1] = decodeChar(s[0]);

  for(let i=2; i<=s.length; i++) {

    let currChar = s[i-1];
    let prevChar = s[i-2];

    dp[i] = decodeChar(currChar)*dp[i-1] + decodeTwoChars(prevChar, currChar)*dp[i-2];
    dp[i] = dp[i]%(Math.pow(10,9)+7);
  }

  console.log(dp);
  return dp[s.length];
};

console.log(numDecodings('204'));
// console.log(numDecodings('1106'));
// console.log(numDecodings('11106'));
// console.log(numDecodings('*'));
// console.log(numDecodings('1*'));
// console.log(numDecodings('2*'));