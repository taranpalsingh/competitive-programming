/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function(m, n, maxMove, startRow, startColumn) {
  let count = 0;  
  // this will have values for 3d
  // field: [i,j,moves]
  // value: total possible ways to go out of boundary 
  const dp = {};
  
  var findPathsHelper = function(row, col, moves) {

    let total = 0;
    // If already calculated for this 3d case
    if(dp.hasOwnProperty([`${row},${col},${moves}`])) {

      // console.log("inside");
      return dp[`${row},${col},${moves}`];
    } 

    // if no moves left
    if(moves<0) 
      return 0;

    // if out of boundary
    if(row<0 || col<0 || row === m || col === n) 
      return 1;

    total += findPathsHelper(row+1, col, moves-1);
    total += findPathsHelper(row-1, col, moves-1);
    total += findPathsHelper(row, col+1, moves-1);
    total += findPathsHelper(row, col-1, moves-1);

    dp[`${row},${col},${moves}`] = total;
    return total;
  };

  count = findPathsHelper(startRow, startColumn,maxMove);
  console.log(dp);
  return count%(Math.pow(10,9) + 7);
};

// console.log(findPaths(2,2,2,0,0));
// console.log(findPaths(1,3,3,0,1));
// console.log(findPaths(8,50,23,5,26));
console.log(findPaths(36,5,50,15,3));