/**
 * @param {string} order
 * @param {string} str
 * @return {string}
 */

// TC: 95% 
var customSortString = function(order, str) {

  if(!order.length) {
    return str;
  }

  // creating a map of characters in string with their occurences.
  const strObj = {};
  for(const char of str) {
    strObj[char] = strObj.hasOwnProperty(char)? strObj[char]+1: 1;
  }

  // using the same str string to save memory
  str = '';
  // inserting characters to str, as occured in order
  for(let char of order) {
    if(strObj.hasOwnProperty(char)) {
      str += (char.repeat(strObj[char]))
      delete strObj[char]  
    }
  }

  // for characters that were not given in order
  for(let key of Object.keys(strObj)) {
    str += (key.repeat(strObj[key]))
  }

  return str;
};

// console.log(customSortString("cba", "abcd"));
console.log(customSortString("cfr", "abcdefabc"));
