/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
  
  let queue = [], visited = [];
  for(let i=0; i<mat.length; i++) {
    visited.push(Array(mat[0].length).fill(0));
  }


  for(let i=0; i<mat.length; i++) {
    for(let j=0; j<mat[0].length; j++) {
      if(mat[i][j] === 0) {
        queue.push([i,j]);
        visited[i][j] = 1;
      }
    }
  }

  let qIndex = 0;
  while(qIndex < queue.length) {
    const [currX, currY] = queue[qIndex++];
    const directions = [[-1,0], [1,0], [0,-1], [0,1]];

    for(const dir of directions) {
      let x = currX + dir[0];
      let y = currY + dir[1];

      if(x < 0 || x >= mat.length || y < 0 || y >= mat[0].length || visited[x][y]) {
        continue
      }

      mat[x][y] = mat[currX][currY] + 1;
      visited[x][y] = 1;
      queue.push([x,y]);
    }
  }
  return mat;
};

// console.log(updateMatrix([[0,0,0],[0,1,0],[0,0,0]]));
console.log(updateMatrix([[0,0,0],[0,1,0],[1,1,1],[1,1,1]]));