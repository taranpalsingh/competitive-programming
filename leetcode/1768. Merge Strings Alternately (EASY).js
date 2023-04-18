/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  let i = 0, ans = '', minLen = Math.min(word1.length, word2.length);
  
  while (i < minLen) {
      ans += word1[i] + word2[i++];
  }

  if (i < word1.length)
      ans += word1.slice(i, word1.length);  
  if (i < word2.length)
      ans += word2.slice(i, word2.length);
  return ans;
};