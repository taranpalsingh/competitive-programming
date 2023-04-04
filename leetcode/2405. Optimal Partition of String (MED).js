/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
  let count = 0, arr = new Array(26).fill(0);

  for (let i=0; i<s.length; i++) {
      console.log(s[i]);
  
      if (arr[s.charCodeAt(i) - 97] === 1) {
          count++;
          console.log('found it')
          arr = new Array(26).fill(0);
      }
      arr[s.charCodeAt(i) - 97] = 1;
  }
  count++;
  return count;
};

// /**
//  * @param {string} s
//  * @return {number}
//  */
// var partitionString = function(s) {
//     let count = 0, obj = {};

//     for (let i=0; i<s.length; i++) {
//         if (s[i] in obj) {
//             count++;
//             obj = {};
//         }
//         obj[s[i]] = 1;
//     }
//     count++;
//     return count;
// };