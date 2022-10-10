/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
  let str = '', changed = false, len = palindrome.length;
  if (palindrome.length === 1) {
      return '';
  }
  
  for (let i=0; i<Math.floor(palindrome.length/2); i++) {
      if (!changed && palindrome[i] != 'a') {
          str += 'a';
          changed = true;
          // console.log(str);
      } else {
          str += palindrome[i];
      }
  }
  if (!changed) {
      return palindrome.slice(0, palindrome.length-1) + 'b';
  }
  return str + palindrome.slice(Math.floor(palindrome.length/2), palindrome.length);
};