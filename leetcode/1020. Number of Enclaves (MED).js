/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
  const rows = grid.length, cols = grid[0].length; 
  const directions = [[0,1],[0,-1],[1,0][-1,0]];

  var markZero = function(i,j) {
    
    if (i >= 0 && i < rows && j >= 0 && j < cols ) {
      if (grid[i][j] === 0) return;
      
      grid[i][j] = 0;
      
      markZero(i+1,j);
      markZero(i-1,j);
      markZero(i,j+1);
      markZero(i,j-1);
    }
    
  }

  for (let i = 0; i <cols; i++) {
    if (grid[0][i] === 1) {
      markZero(0,i);
    }
    if (grid[rows-1][i] === 1) {
      markZero(rows-1,i);
    }
  }

  for (let i = 0; i <rows; i++) {
    if (grid[i][0] === 1) {
      markZero(i, 0);
    }
    if (grid[i][cols-1] === 1) {
      markZero(i, cols-1);
    }
  }

  let count = 0;
  for (let i = 0; i <rows; i++) {
    for (let j = 0; j <cols; j++) {
      if (grid[i][j] === 1) {
        count++;
      }
    }
  }

  return count;
};

console.log(numEnclaves([[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]));

console.log(numEnclaves([[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]));
