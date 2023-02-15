/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let arr = [], ans = true;

  for (const char of s) {
      if (char === '(')
          arr.push(')');
      else if (char === '[')
          arr.push(']');
      else if (char === '{')
          arr.push('}');
      else if (arr.pop() != char)
          ans = false;
  }
  return ans && arr.length === 0;
};