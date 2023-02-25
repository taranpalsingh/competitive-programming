/**
 * @param {string} s
 * @return {number}
 */

 
var lengthOfLongestSubstring = function(s) {
  const occurences = {};
  let maxCount = 0, start = 0, end = 0;

  for (let i=0; i<s.length; i++) {
    if (occurences.hasOwnProperty(s[i])) {
      maxCount = Math.max(end - start, maxCount);
      let index = start;
      start = occurences[s[i]]+1;
      while (index <= occurences[s[i]]) {
        delete occurences[s[index]];
        index++;
      }
    }
    end++;
    occurences[s[i]] = i;
  }
  return Math.max(end - start, maxCount);  
}


// console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("bbbbb"));
// console.log(lengthOfLongestSubstring("pwwkew"));
// console.log(lengthOfLongestSubstring("abba"));


// 2nd
// var lengthOfLongestSubstring = function(s) {
//   const occurences = new Array(300).fill(null);
//   let count = 0, maxCount = 0, prev = 0;

//   function decreaseCount(start, end) {
//     for (let index=start; index<=end; index++) {
//       occurences[s.charCodeAt(index)] = null;
//     }
//     count -= (end - start);
//     prev = end + 1;
//   }

//   for (let i=0; i<s.length; i++) {
//     if (occurences[s.charCodeAt(i)] != null) {
//       maxCount = Math.max(count, maxCount); 
//       decreaseCount(prev, occurences[s.charCodeAt(i)]);
//     } else {
//       count++;
//     }
//     occurences[s.charCodeAt(i)] = i;
//     // console.log(`i: ${s[i]}`)
//     // console.log(occurences)
//   }
//   return Math.max(count, maxCount);  
// }


// 3rd
/ var lengthOfLongestSubstring = function(s) {
//   let maxCount = 0;
//   let newWord = '';
//   // will store all the alphabets that have been covered till the latest valid subsequence.
//   const alphabetsCovered = {};
//   let i=0;

//   while(i<s.length) {
//     // if not present in latest valid subsequence.
//     if(!alphabetsCovered.hasOwnProperty(s[i])) {
//       alphabetsCovered[s[i]] = 1;
//       newWord += s[i];
//     } else {
//       maxCount = Math.max(maxCount, newWord.length);
//       const indexOfRepeatedChar = newWord.indexOf(s[i]);
//       // remove all the chars from alphabetsCovered ranging from 0th index to the repeated char. 
//       const wordRemoved = newWord.slice(0, indexOfRepeatedChar);
//       for(const char of wordRemoved) {
//         delete alphabetsCovered[char];
//       }
//       // new word is sliced from the repeatedCharacter+1 to the end
//       newWord = newWord.slice(indexOfRepeatedChar+1,newWord.length);
//       newWord += s[i];
//     }
//     i++;
//   }
//   // if the last char of s did not entered the above else case
//   maxCount = Math.max(maxCount, newWord.length)
//   return maxCount;
// };
