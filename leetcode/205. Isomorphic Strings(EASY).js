/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {

  
  if(s === t) {
    return true;
  }

  if(s.length != t.length) {
    return false;
  }

  if(new Set(s).size != new Set(t).size) {
    return false;
  }

  const fristToSecondMap = {};
  const secondToFirstMap = {};

  for(let i=0; i<s.length; i++) {
    if(fristToSecondMap.hasOwnProperty(t[i])) {
      if(fristToSecondMap[t[i]] != s[i]) {
        return false;
      }
    } else {
      fristToSecondMap[t[i]] = s[i];
    }    

    if(secondToFirstMap.hasOwnProperty(s[i])) {
      if(secondToFirstMap[s[i]] != t[i]) {
        return false;
      }
    } else {
      secondToFirstMap[s[i]] = t[i];
    }    

  }
  return true;
};

// console.log(isIsomorphic('egg', 'add'));
console.log(isIsomorphic('bar', 'egg'));
// console.log(isIsomorphic('egg', 'bar'));
// console.log(isIsomorphic('paper', 'title'));