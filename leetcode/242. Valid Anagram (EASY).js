/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length != t.length) return false;

  let occurences = new Array(26).fill(0);

  for (let i=0; i<s.length; i++) {
    occurences[s.charCodeAt(i) - 97]++;    
    occurences[t.charCodeAt(i) - 97]--;
  }  

  for (const num of occurences) {
    if (num != 0) return false;
  }

  return true;
};