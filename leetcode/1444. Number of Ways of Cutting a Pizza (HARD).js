/**
 * @param {string[]} pizza
 * @param {number} k
 * @return {number}
 */
var ways = function(pizza, k) {

  var result = 0;
  var appleCount = 0;
  for (var row of pizza) {
      for (var i = 0; i < row.length; i++) {
          if (row[i] === 'A') appleCount++;
      }
  }
  var m = pizza.length;
  var n = m ? pizza[0].length : 0;
  var map = {};


  var helper = function(rowStart, colStart, curK) {
    
    // console.log(`rowStart: ${rowStart}, rowEnd: ${rowEnd}, colStart: ${colStart}, colEnd: ${colEnd}, k: ${k}`);
    if (curK === 1) {
      // console.log('reached end');
      result++;
      result %= 1000000007;
      return;
    }

    // check in DP
    if (map[rowStart + ' ' + colStart + ' ' + curK]) {
      result += map[rowStart + ' ' + colStart + ' ' + curK];
      result %= 1000000007;
      return;
    }

    var tmpResult = result;
    var cutAppleCount = 0;

    for (var i = rowStart; i < m - 1; i++) {
      var row = pizza[i];
      for (var j = colStart; j < n; j++) {
          if (row[j] === 'A') cutAppleCount++;
      }
      if (cutAppleCount + curK - 1 > appleCount) break;
      if (cutAppleCount >= 1) {
          appleCount -= cutAppleCount;
          helper(i + 1, colStart, curK - 1);
          appleCount += cutAppleCount;   
      }
    }

    cutAppleCount = 0;
        
    for (var j = colStart; j < n - 1; j++) {
        var row = pizza[i];
        for (var i = rowStart; i < m; i++) {
            if (pizza[i][j] === 'A') cutAppleCount++;
        }
        if (cutAppleCount + curK - 1 > appleCount) break;
        if (cutAppleCount >= 1) {
            appleCount -= cutAppleCount;
            helper(rowStart, j + 1, curK - 1);
            appleCount += cutAppleCount;   
        }
    }
    
    map[rowStart + ' ' + colStart + ' ' + curK] = result - tmpResult;
  }
  
  helper(0, 0, k);
  return result;
};

console.log(ways(["A..","AAA","..."], 3));