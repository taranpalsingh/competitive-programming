/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  romans = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  values = [1,5,10,50,100,500,1000];
  let ans = 0;
  for (let i=0; i<s.length; i++) {
      if (i<s.length-1 && romans.indexOf(s[i]) < romans.indexOf(s[i+1])) {
          ans -=  values[romans.indexOf(s[i])];
      } else {
          ans +=  values[romans.indexOf(s[i])];
      }
      // console.log(ans);
  }
  return ans;
};