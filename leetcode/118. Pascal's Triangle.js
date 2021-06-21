/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const results = [];
  for(let i=0; i<numRows; i++) {
      let currentRow = [];
      currentRow.push('1')
      let j=1;
      while(j<=i) {
          if(j===i) {
              currentRow.push('1')
          } else {
              currentRow.push(''+(+results[i-1][j-1] + +results[i-1][j]))
          }
          j++;
      }
      results.push(currentRow);
  }
  return results;
};

console.log(generate(5));