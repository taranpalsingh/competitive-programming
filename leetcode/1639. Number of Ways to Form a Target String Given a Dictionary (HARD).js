/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
var numWays = function(words, target) {
  
  var occurrencesObj = function(word) {
    let obj = {};
    word.split('').forEach((char, index) => {
      if (!(char in obj)) {
        obj[char] = [];
      }
      obj[char].push(index);
    })
    return obj;
  }

  let dict = {}, dp = new Array(target.length).fill().map(_ => new Array(words[0].length).fill(null));
  const mod = Math.pow(10, 9) + 7;

  words.forEach(word => {
    dict[word] = occurrencesObj(word);
  })
  // console.log(dict);


  var helper = function(targetIndex, letterIndex, count, arr1, arr2) {

    // console.log(`targetIndex: ${targetIndex}, letterIndex: ${letterIndex}`);
    if (targetIndex > target.length - 1) {
      // console.log(arr1);
      // console.log(arr2);
      return 1;
    }

    if (letterIndex > -1 && dp[targetIndex][letterIndex] != null)  {
      // console.log('dp used');
      return dp[targetIndex][letterIndex];
    }

    if (letterIndex >= words[0].length - 1) return 0;

    const targetChar = target[targetIndex];

    for (const word of Object.keys(dict)) {
      if (!(targetChar in dict[word])) continue;
      
      for (const i of dict[word][targetChar]) {
        if (i > letterIndex) {
          count += helper(targetIndex+1, i, 0, [...arr1, i], [...arr2, word]) % mod;
        }
      }
    }
    if (letterIndex > -1) dp[targetIndex][letterIndex] = count;
    return count % mod;
  }

  return helper(0, -1, 0, [], []) % mod;
};


console.log(numWays(["acca","bbbb","caca"], "aba"));
console.log(numWays(["abba","baab"], "bab"));
// console.log(numWays());