/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {

  const row = matrix.length - 1;
  

  for (let i=0; i<=row; i++) {
    for (let j=i; j<=row; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for (let i=0; i<=row; i++) {
      matrix[i].reverse();
  }

};
