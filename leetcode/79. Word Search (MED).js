/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const height = board.length, width = board[0].length; 
  const visitedGlobal = new Array(height).fill().map(_ => new Array(width).fill(false));

  var helper = function(r, c, index) {
    // console.log(`${r}, ${c}, ${index}`);

    if (index === word.length - 1)
      return true;

    let isPossible = false;
    let currChar = board[r][c];

    // visited[r][c] = true;
    for (const [i,j] of [[1,0], [-1,0], [0,1], [0,-1]]) {
      const newr = r + i;
      const newc = c + j;
      // console.log(`${newr}, ${newc}`);

      if (newr >= 0 && newr < height && newc >= 0 && newc < width && board[newr][newc] === word[index])  {
        // console.log('trying');
        isPossible = isPossible || helper(newr, newc, index+1);
      }
    }
    
    board[r][c] = currChar;
    return isPossible;
  }

  // return helper(1,3,1, visitedGlobal);
  for (var i = 0; i < height; i++) {
    for (var j = 0; j < width; j++) {
      if (board[i][j] === word[0]) {
        // console.log(`${i}, ${j}`);
        if (helper(i,j,1)) {
          return true;
        }
      }

    }
  }
  return false;
};

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"));
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE"));