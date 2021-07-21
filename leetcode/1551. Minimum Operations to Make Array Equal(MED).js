/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function(n) {
  const arr = [];
  let moves = 0;

  for(let i=0; i<n; i++) {
    arr.push(2*i +1);
  }

  let ideal = (n%2 != 0) ? arr[Math.floor(n/2)]: arr[n/2]-1;

  for(let i=0; i<n; i++) {
    if(arr[i] > ideal) {
      moves += arr[i]-ideal;
    }
  }
  
  return moves;
};


