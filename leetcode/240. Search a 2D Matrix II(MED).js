/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let startI=0, startJ=0, endI=matrix.length, endJ=matrix[0].length;
  while(startI<=endI && startJ<=endJ) {
    let midI = Math.floor((startI+endI)/2);
    let midJ = Math.floor((startJ+endJ)/2);

    if(matrix[midI][midJ] > target) {
      
    }
  }

  return ;
};

console.log(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 5));