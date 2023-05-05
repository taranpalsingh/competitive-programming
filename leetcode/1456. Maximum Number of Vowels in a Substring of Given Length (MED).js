/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    
  const vowels = {'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1};
  let count = 0, ans = 0;

  for (let i=0; i<s.length; i++) {
      if (i>=k && s[i-k] in vowels) 
          count--;

      if (s[i] in vowels)
          count++;
      ans = Math.max(ans, count);
  }
  return ans;
};