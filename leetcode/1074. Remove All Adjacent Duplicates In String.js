/**
 * @param {string} s
 * @return {string}
 */

// Best approach
var removeDuplicates = function(s) {
 
  s = s.split('')
  let stack = [];
  
  for (let i = 0; i < s.length; i++) {
      if (stack[stack.length - 1] === s[i]) {
          stack.pop()
      } else {
          stack.push(s[i])
      }
  }
  return stack.join('')
};

// 1st approach
// var removeDuplicates = function(s) {
//   let newS = "";
//   let j=0;
//   for(let i=0; i<s.length; i++) {
//     if(j!=0 && newS[j-1] === s[i]) {
//       j--;
//       newS = newS.slice(0,j)
//       continue;
//     }
//     newS += s[i];
//     j++;
//   }
//   return newS;
// };



console.log(removeDuplicates("abbaca"));
console.log(removeDuplicates("azxxzy"));
console.log(removeDuplicates("dabccba"));
console.log(removeDuplicates("aaa"));