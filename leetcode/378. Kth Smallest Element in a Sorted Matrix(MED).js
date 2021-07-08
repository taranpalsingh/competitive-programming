/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  const matrixElements = [], elementsObj = {};
  for(let i=0; i<matrix.length; i++) {
    for(let j=0; j<matrix[0].length; j++) {
      // if(!elementsObj.hasOwnProperty(matrix[i][j])) {
        matrixElements.push(matrix[i][j]);
      //   elementsObj[matrix[i][j]] = 1;
      // }
    }
  }
  matrixElements.sort((a,b)=> a-b);
  // console.log(matrixElements);
  return matrixElements[k-1];
};

console.log(kthSmallest([[1,5,9],[10,11,13],[12,13,15]], 8));
console.log(kthSmallest([[-5]], 1));