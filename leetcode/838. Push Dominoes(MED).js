/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
  let left = Array(dominoes.length).fill(null);
  let right = Array(dominoes.length).fill(null);
  let result = Array(dominoes.length).fill('.');

  // left force
  let force = false, forceIndex = null;
  for(let i=dominoes.length-1; i>=0; i--) {
    if(dominoes[i] === 'L') {
      force = true;
      forceIndex = i;
    } else if(dominoes[i] === 'R') {
      force = false;
      forceIndex = null;
    }

    if(force) {
      left[i] = forceIndex;
    }
  }
  console.log(left);

  // right force
  force = false;
  forceIndex = null;
  for(let i=0; i<dominoes.length; i++) {
    if(dominoes[i] === 'R') {
      force = true;
      forceIndex = i;
    } else if(dominoes[i] === 'L') {
      force = false;
      forceIndex = null;
    }

    if(force) {
      right[i] = forceIndex;
    }
  }

  console.log(right);

  for(let i=0; i<dominoes.length; i++) {
    
    if(left[i] === null && right[i] === null) {
      result[i] = '.';
    } else if(left[i] != null && right[i] != null) {
      if(Math.abs(i-left[i]) === Math.abs(i-right[i])) {
        result[i] = '.';
        continue
      }
      result[i] = (Math.abs(i-left[i]) < Math.abs(i-right[i])) ? 'L': 'R';
    }
    else if(left[i] === null && right[i] != null) {
      result[i] = 'R'
    }
    else if(left[i] != null && right[i] === null) {
      result[i] = 'L'
    }
    
  }
  return result;
  // return result.join("");
}


console.log(pushDominoes(".L.R...LR..L..")); 
console.log(pushDominoes("RR.L")); 







// incomplete logic 
// var pushDominoes = function(dominoes) {
//   let lastPush = 'L', lastPushIndex = 0, i = 0;
//   let updatedDominoes = '';
//   console.log("inside");

//   while(i <= dominoes.length) {
//     console.log(`i, arr[i]: ${i}, ${dominoes[i]}`);
//     console.log(`lastPushIndex:${lastPushIndex}`);
//     let newStr = '';
//     switch(dominoes[i]) {
//       case 'L':
//         console.log("inside L");
//         if(lastPush === 'L') {
//           newStr += 'L'.repeat(i-lastPushIndex+1);
//         } else if(lastPush === 'R') {
//           let mid = null, range = i - lastPushIndex + 1;

//           if(range%2 === 0) {
//             console.log("even");
//             mid = range/2 + lastPushIndex;
//             newStr += 'R'.repeat(range/2);
//             newStr += 'L'.repeat(range/2);
//           } else {
//             console.log("odd");
//             mid = Math.floor(range/2) + lastPushIndex;
//             newStr += 'R'.repeat(mid - lastPushIndex);
//             newStr += '.';
//             newStr += 'L'.repeat(i - mid);
//           }
//         }
//         console.log(`appending: ${newStr}`);
//         updatedDominoes += newStr;
//         lastPush = 'L';
//         lastPushIndex = i;
//         break; 
//       case 'R': 
//         console.log("inside R");

//         if(lastPush === 'R') {
//           newStr += 'R'.repeat(i-lastPushIndex);
//         } else if(lastPush === 'L') {
//           newStr += '.'.repeat(i - lastPushIndex - 1);
//         }
//         console.log(`appending: ${newStr}`);
//         updatedDominoes += newStr;
//         lastPush = 'R';
//         lastPushIndex = i;
//         break;
//       default:
//         // console.log("inside R");
//         // continue;
//     }
//     i++;
//   }
//   i--;
//   console.log(i);
//   if(lastPush === 'R') {
//     updatedDominoes += 'R'.repeat(i - lastPushIndex);
//   } else {
//     updatedDominoes += '.'.repeat(i - lastPushIndex - 1);
//   }
//   console.log("outside");
//   return updatedDominoes; 
// };
