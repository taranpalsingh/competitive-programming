/**
 * @param {string} s
 * @return {number}
 */

var minFlipsMonoIncr = function(s) {
  let onesCount = 0, zeroCount = 0;

  let i = 0; 
  while(i < s.length && s[i] != 1) {
    if(+s[i] === 1) {
      break;
    }
    i++;
  }

  for( ; i < s.length; i++) {
    if(+s[i] === 0) {
      zeroCount++;
    } else if(+s[i] === 1) {
      onesCount++;
    }

    if(zeroCount > onesCount) {
      zeroCount = onesCount;
    }
  }

  return Math.min(zeroCount, onesCount);
};

console.log(minFlipsMonoIncr("00110"));
console.log(minFlipsMonoIncr("010110"));
console.log(minFlipsMonoIncr("00011000"));
console.log(minFlipsMonoIncr("000000"));
console.log(minFlipsMonoIncr("1100011"));

// 1st approach, better than 20%, 12 minutes
// var minFlipsMonoIncr = function(s) {
//   let left = Array(s.length + 1).fill(0);
//   let right = Array(s.length + 1).fill(0);
//   // let sum = Array(s.length + 1).fill(0);
//   let count = 0, min = Infinity;

//   for(let i = 0; i < s.length; i++) {
//     (+s[i] === 1) ? count++ : null;
//     left[i + 1] = count;
//   }

//   count = 0;
//   min = left[s.length];

//   for(let i = s.length - 1; i >= 0; i--) {
//     (+s[i] === 0) ? count++ : null;
//     right[i] = count;
//     min = Math.min(min, left[i] + right[i]);
//   }

//   return min;
// };
