/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

  var isAlphaNumeric = function(s) {
      const ascii = s.charCodeAt(0);
      if (
          (ascii >=48 && ascii <= 57) || 
          (ascii >=65 && ascii <= 90) || 
          (ascii >=97 && ascii <= 122)
      ) {
          return true;
      }
      return false;
  }

  let i = 0, j = s.length-1;

  while (i < j) {
      if (!isAlphaNumeric(s[i])) {
          i++;
          continue;
      }
      if (!isAlphaNumeric(s[j])) {
          j--;
          continue;
      }

      if (s[i++].toLowerCase() != s[j--].toLowerCase()) return false;
  }
  
  return true;
};