/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {

  const list = [];
  let newMatrix = [];

  for (let i = 0; i <mat.length;i++) {
    for (let j = 0; j <mat[0].length;j++) {
      list.push(mat[i][j]);
    }
  }

  if(list.length != c*r) {
    console.log("returning as it is");
    return mat;
  }
  
  let listIndex = 0;
  for (let i = 0; i <r;i++) {
    newMatrix.push([])
    for (let j = 0; j <c;j++) {
      newMatrix[i][j] = list[listIndex];
      listIndex++;
    }
  }
  return newMatrix;
};

console.log(matrixReshape([[1,2],[3,4]],1,4));
console.log(matrixReshape([[1,2],[3,4]],2,4));
console.log(matrixReshape([[1,2],[3,4],[5,6]],2,3));
console.log(matrixReshape([[1,2],[3,4],[5,6]],3,3));
console.log(matrixReshape([[1,2],[3,4],[5,6]],3,2));