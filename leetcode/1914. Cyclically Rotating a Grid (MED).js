/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var rotateGrid = function(grid, k) {

  var rotateGridHelper = function(m, n, rotationIndex) {
    let i=rotationIndex, j = rotationIndex;
    let firstVal = grid[rotationIndex][rotationIndex];
    // console.log(`m: ${m}`);
    // console.log(`n: ${n}`);
    // console.log(`i: ${i}`);
    // console.log(`j: ${j}`);
    // console.log(`firstVal: ${firstVal}`);

    // going in right dir
    while(j<n-1) {
      grid[i][j] = grid[i][j+1]
      j++;
    }
    // console.log(grid);
    
    // going down
    while(i<m-1) {
      grid[i][j] = grid[i+1][j]
      i++;
    }
    // console.log(grid);
    
    // going in left dir
    while(j>0+rotationIndex) {
      grid[i][j] = grid[i][j-1]
      j--;
    }
    // console.log(grid);
    
    // going up
    while(i>0+rotationIndex) {
      grid[i][j] = grid[i-1][j]
      i--;
    }
    // console.log(grid);
    grid[rotationIndex+1][rotationIndex] = firstVal;
    // console.log(grid);
  };
  
  for(let rotations=0; rotations<k; rotations++) {
    for(let rotationIndex=0; rotationIndex<grid[0].length/2; rotationIndex++) {
      rotateGridHelper(grid.length-rotationIndex, grid[0].length-rotationIndex, rotationIndex)
    }
  }

  return grid
};

// console.log(rotateGrid([[40,10],[30,20]],1));
// console.log(rotateGrid([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]],2));

console.log(rotateGrid([[4,5,8,9,4,2,4,7,2,4],[7,1,9,6,6,1,4,5,7,7],[7,1,5,1,1,7,10,1,3,1],[7,2,2,5,2,6,6,4,7,7],[1,2,3,8,4,7,6,9,6,2],[5,10,3,4,7,2,7,5,3,10]],4));
