/**
 * @param {number} n
 * @return {number}
 */
var findIntegers = function(n) {
  const fibonacci = Array(31);
  fibonacci[0] = 1;
  fibonacci[1] = 2;
  for(let i=2; i<31; i++) {
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
  }

  let i = 30, sum = 0, prev_bit = 0;
  while (i >= 0) {
      if ((n & (1 << i)) != 0) {
          sum += fibonacci[i];
          if (prev_bit == 1) {
              sum--;
              break;
          }
          prev_bit = 1;
      } else
          prev_bit = 0;
      i--;
  }
  return sum + 1;
};


console.log(findIntegers(9));