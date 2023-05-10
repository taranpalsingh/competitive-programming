/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  const mat = new Array(n).fill().map(_ => new Array(n).fill(0));

  let row1 = 0, row2 = n-1, col1 = 0, col2 = n-1, curr = 1, row = 0, col = 0;
  // console.log(mat);

  while (curr <= n*n && row1 <= row2 && col1 <= col2) {
  // while (row1 < row2 && col1 < col2) {

    // console.log(row)
    // console.log(col)
    row = row1;
    col = col1;
    
    for (col = col1; col <= col2; col++) {
      mat[row][col] = curr++;
    }
    
    for (row = row1 + 1; row <= row2; row++) {
      mat[row][col-1] = curr++;
    }

    row1++;
    col2--;

    if (row1 <= row2 && col1 <= col2) {

      // row--;
      for (col = col2; col >= col1; col--) {
        // console.log(col)
        mat[row-1][col] = curr++;
      }
      // row1++;
      // console.log(row2 - 1)
      // console.log(col)

      for (row = row2 - 1; row >= row1; row--) {
        mat[row][col + 1] = curr++;
      }
    }

    col1++;
    row2--;
    // console.log(mat);
  }
  return mat;
};

console.log(generateMatrix(4));