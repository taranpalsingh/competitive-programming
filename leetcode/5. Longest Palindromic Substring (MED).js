/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  
  let maxCount = 0, ans = '';

  for (let i=0; i<s.length; i++) {
    let j = i, k = i;
    while (j >= 0 && k < s.length && s[j] === s[k]) {
      if (k-j+1 >= maxCount) {
        maxCount = k-j+1;
        ans = s.substring(j,k+1);
      }
      j--;
      k++;
    }
    j = i, k = i + 1;
    while (j >= 0 && k < s.length && s[j] === s[k]) {
      if (k-j+1 > maxCount) {
        maxCount = k-j+1;
        ans = s.substring(j,k+1);
      }
      j--;
      k++;
    }
  }
  return ans;
};

// console.log(longestPalindrome("babab"));
// console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("babbabadakab"));
// console.log(longestPalindrome(""));
// console.log("aba".substring(0,1));