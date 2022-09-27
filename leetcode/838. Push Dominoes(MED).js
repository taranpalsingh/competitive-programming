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






/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
  let left = [], right = [], leftIndex = 0, rightIndex = 0;

  // for right side
  for(const element of dominoes.split("")) {
    if (element === 'L') {
      right.push(null);
      rightIndex = 0;
    } else if (element === '.') {
      if (!rightIndex) {
        right.push(null);
        rightIndex = 0;
      } else {
        right.push(rightIndex);
        rightIndex++;
      }
    } else if (element === 'R') {
      rightIndex = 1;
      right.push(0);
    }
  }
  // console.log(right);

    // for left side
    for(const element of dominoes.split("").reverse()) {
      if (element === 'R') {
        left.push(null);
        leftIndex = 0;
      } else if (element === '.') {
        if (!leftIndex) {
          left.push(null);
          leftIndex = 0;
        } else {
          left.push(leftIndex);
          leftIndex++;
        }
      } else if (element === 'L') {
        leftIndex = 1;
        left.push(0);
      }
    }

  left = left.reverse()
  // console.log(left);

  let ans = [];
  for (let i=0; i<dominoes.length; i++) {
    if (left[i] === null && right[i] === null) {
      dominoes[i] = '.';
      ans.push('.');
    } else if (left[i] === null) {
      dominoes[i] = 'R';
      ans.push('R');
    } else if (right[i] === null) {
      dominoes[i] = 'L';
      ans.push('L');
    } else if (right[i] === left[i]) {
      dominoes[i] = '.';
      ans.push('.');
    } else if (right[i] > left[i]) {
      dominoes[i] = 'L';
      ans.push('L');
    } else if (right[i] < left[i]) {
      dominoes[i] = 'R';
      ans.push('R');
    }
  }

  return ans.join("");
};