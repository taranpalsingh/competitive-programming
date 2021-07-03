/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */

// This is the naive approach and possibly the only approach in javascript
// In java this can be done using Trie set
var maxSumSubmatrix = function(matrix, k) {
  const m = matrix.length, n=matrix[0].length;
  let maxSum=Number.NEGATIVE_INFINITY;

  // just like 2 pointers approach, start the leftCol index from the 0th position and move towards the end. 
  for(let leftCol=0; leftCol<n; leftCol++) {

    let cumRow = Array(m).fill(0);

    // start the rightCol index from the leftCol position and move towards the end. 
    for(let rightCol=leftCol; rightCol<n; rightCol++) {
      // find the cumulative sum (row wise) till the rightCol.
      for(let row=0; row<m; row++) {
        cumRow[row] += matrix[row][rightCol];
      }

      let max=Number.NEGATIVE_INFINITY;

      // check for each and every possible subquery's sum
      for (let i = 0; i < m; i++) {
          let sum = 0;
          for (let j = i; j < m; j++) {
              sum += cumRow[j];
              if (sum <= k) max = Math.max(max, sum)
          }
      }
      maxSum = Math.max(maxSum, max)

      // In case we have already got a rectangle with sum k
      if(maxSum===k) 
        return k;
    }
  }
  return maxSum;
}


console.log(maxSumSubmatrix([[2,0,-3,4],[6,3,2,-1],[5,4,7,3],[2,-6,8,1]], 3));
console.log(maxSumSubmatrix([[1,0,1],[0,-2,3]], 2));
console.log(maxSumSubmatrix([[2,2,-1]], 3));
