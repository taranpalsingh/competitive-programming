/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function(dist, speed) {
  const time = [];
  // Find out the time in which each monster will reach the starting end. 
  dist.forEach((val, index) => {
    time.push(Math.ceil(val/speed[index]));
  })
  time.sort((a,b) => a-b);

  let count=0;
  // iterating over the time each monster takes
  for(let i=1; i<=time.length; i++) {
    if(time[i] <= i) {
      count++;
      break;
    }
    count++;
  }
  return count;
};

console.log(eliminateMaximum([1,3,4], [1,1,1]));
console.log(eliminateMaximum([1,1,2,3], [1,1,1,1]));
console.log(eliminateMaximum([1,2,3,3], [1,1,1,1]));
console.log(eliminateMaximum([3,2,4], [5,3,2]));
console.log(eliminateMaximum([4,2,8], [2,1,4]));
console.log(eliminateMaximum([4,3,3,3,4],[1,1,1,1,4]));
console.log(eliminateMaximum([46,33,44,42,46,36,7,36,31,47,38,42,43,48,48,25,28,44,49,47,29,32,30,6,42,9,39,48,22,26,50,34,40,22,10,45,7,43,24,18,40,44,17,39,36],[1,2,1,3,1,1,1,1,1,1,1,1,1,1,7,1,1,3,2,2,2,1,2,1,1,1,1,1,1,1,1,6,1,1,1,8,1,1,1,3,6,1,3,1,1]));
