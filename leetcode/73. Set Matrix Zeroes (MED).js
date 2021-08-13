/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let rows = Array(matrix.length).fill(1);
  let cols = Array(matrix[0].length).fill(1);
  
  for(let i=0; i<matrix.length; i++) {
    for(let j=0; j<matrix[0].length; j++) {
      if(matrix[i][j] === 0) {
        rows[i] = 0;
        cols[j] = 0;
      }
    }
  }

  for(let i=0; i<matrix.length; i++) {
    for(let j=0; j<matrix[0].length; j++) {
      if(rows[i] === 0 || cols[j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
};

console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]));
console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]));