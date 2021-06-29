/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
  let count = 0;
  const rowLength = mat.length;
  const colLength = mat[0].length;
  const row = Array(rowLength).fill(0);  
  const col = Array(colLength).fill(0);  

  for(let i=0; i<rowLength; i++) {
    for(let j=0; j<colLength; j++) {
      row[i] += mat[i][j];
      col[j] += mat[i][j];
    }
  }

  for(let i=0; i<rowLength; i++) {
    for(let j=0; j<colLength; j++) {
      if(mat[i][j] === 1 && row[i] === 1 && col[j] === 1) {
        count++;
      }
    }
  }

  return count;
};

console.log(numSpecial([[1,0,0],[0,0,1],[1,0,0]]));
console.log(numSpecial([[1,0,0],[0,1,0],[0,0,1]]));
console.log(numSpecial([[0,0,0,0,0],[1,0,0,0,0],[0,1,0,0,0],[0,0,1,0,0],[0,0,0,1,1]]));
// console.log(numSpecial());
// console.log(numSpecial());