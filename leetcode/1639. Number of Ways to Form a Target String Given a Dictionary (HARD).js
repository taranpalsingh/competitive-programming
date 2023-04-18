/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
var numWays = function(words, target) {

  let occ = new Array(26).fill().map(_ => new Array(words[0].length).fill(0));
  let dp = new Array(target.length).fill().map(_ => new Array(words[0].length).fill(-1));
  const mod = 1000000007;
  const m = target.length;
  const k = occ[0].length;

  words.forEach((word, index) => {
    word = word.toLowerCase();
    for (let i = 0; i < word.length; i++) {
      const charCode = word.charCodeAt(i) - 97;
      occ[charCode][i]++;
    }
  })
  
  // console.log(occ);
  var helper = function(i, j) {
    if (i === m) return 1;
    if (j === k) return 0;

    if (dp[i][j] != -1) return dp[i][j];

    const notTaken = helper(i, j+1) % mod;

    const taken = (occ[target.charCodeAt(i) - 97][j] * helper(i+1, j+1)) % mod;

    dp[i][j] = (taken + notTaken) % mod
    return dp[i][j];
  }
  return helper(0, 0) % mod;
};


console.log(numWays(["acca","bbbb","caca"], "aba"));
// console.log(numWays(["abba","baab"], "bab"));
// console.log(numWays());