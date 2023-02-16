/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let carry = 1;
  for (let i=digits.length-1; i>=0; i--) {
      let sum = carry + digits[i];
      if (sum < 10) {
          digits[i] = sum;
          carry = 0;
          break;
      } else {
          carry = 1;
          digits[i] = sum%10;
      }
  }
  if (carry === 1) {
      digits.unshift(1);
  }
  return digits;
};