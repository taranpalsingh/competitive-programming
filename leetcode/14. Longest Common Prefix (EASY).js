/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const firstStr = strs[0];
  let smallestLength = 201, ans = '';
  for (const str of strs) {
      smallestLength = Math.min(str.length,smallestLength) 
  }
  // console.log(smallestLength);

  for (let i=0; i<smallestLength; i++) {
      let allSame = true;
      for (const str of strs) {
          if (str[i] != firstStr[i]) {
              allSame = false;
              break;
          }
      }
      if (allSame)
          ans += firstStr[i];
      else 
          break;
  }
  return ans
};