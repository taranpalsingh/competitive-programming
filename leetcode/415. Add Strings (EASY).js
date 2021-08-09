/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    
  let i = num1.length - 1, j = num2.length - 1, carry = 0, ans = '';
  while(i >= 0 || j >= 0) {
      let sum = carry;
      if(i >= 0) {
          sum += +num1[i]
      }
      
      if(j >= 0) {
          sum += +num2[j]
      }
      
      carry = 0;
      if(sum > 9) {
          carry = 1;
          sum -= 10;
      }
      ans = ''+sum + ans;
      i--;
      j--;
  }
  (carry) ? ans = ''+carry + ans: null;
  return ans;
};

console.log(addStrings("9333852702227987", "85731737104263"));