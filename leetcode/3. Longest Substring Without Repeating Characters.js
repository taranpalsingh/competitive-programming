/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
  let maxCount = 0;
  let newWord = '';
  // will store all the alphabets that have been covered till the latest valid subsequence.
  const alphabetsCovered = {};
  let i=0;

  while(i<s.length) {
    // if not present in latest valid subsequence.
    if(!alphabetsCovered.hasOwnProperty(s[i])) {
      alphabetsCovered[s[i]] = 1;
      newWord += s[i];
    } else {
      maxCount = Math.max(maxCount, newWord.length);
      const indexOfRepeatedChar = newWord.indexOf(s[i]);
      // remove all the chars from alphabetsCovered ranging from 0th index to the repeated char. 
      const wordRemoved = newWord.slice(0, indexOfRepeatedChar);
      for(const char of wordRemoved) {
        delete alphabetsCovered[char];
      }
      // new word is sliced from the repeatedCharacter+1 to the end
      newWord = newWord.slice(indexOfRepeatedChar+1,newWord.length);
      newWord += s[i];
    }
    i++;
  }
  // if the last char of s did not entered the above else case
  maxCount = Math.max(maxCount, newWord.length)
  return maxCount;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring(''));
console.log(lengthOfLongestSubstring(' '));
console.log(lengthOfLongestSubstring("tmmzuxt"));
console.log(lengthOfLongestSubstring("aabaab!bb"));
console.log(lengthOfLongestSubstring("abab"));