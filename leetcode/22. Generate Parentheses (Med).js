/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = (target, open=0, close=0, str="", arr=[]) => {
  // stop, if close tags == given number. 
  if(close === target) {
      arr.push(str);
  }

  // if "(" can be appended 
  if(open < target) {
      generateParenthesis(target, open+1, close, str+"(", arr);
  } 

  // make sure to close all brackets 
  if(open > close) {
      generateParenthesis(target, open, close+1, str+")", arr);
  }

  return arr;
}

console.log(generateParenthesis(3))