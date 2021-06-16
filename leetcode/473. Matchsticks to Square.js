/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function(matchsticks) {
    
  let sum = matchsticks.reduce((acc, curr) => {
      return acc+curr;
  },0);

  // console.log(sum);
  if(sum%4 != 0) {
      return false;
  }
  const sideLength = sum/4;
  const sides = Array(4).fill(sideLength);

  matchsticks = matchsticks.sort((a,b) => b-a)
  return makeSquareHelper(matchsticks, 0, sides);
  
}
var makeSquareHelper = (sticks, j, sides) => {

  if(j === sticks.length) {
      return (sides[0]===0 && sides[1]===0 && sides[2]===0 && sides[3]===0 )
  }

  for(let i=0; i<4; i++) {
      if(sticks[j] > sides[i]) {
          continue;
      }
      sides[i] -= sticks[j];
      if(makeSquareHelper(sticks, j+1, sides))
          return true
      sides[i] += sticks[j];
  }

  return false;
}

console.log(makesquare([1,1,2,2,2]))
console.log(makesquare([3,3,3,3,4]))
console.log(makesquare([5,5,5,5,4,4,4,4,3,3,3,3]))