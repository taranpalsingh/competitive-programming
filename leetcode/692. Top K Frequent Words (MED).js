/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {  
  const occurences = {};
  words.forEach(word => {
    occurences[word] = occurences.hasOwnProperty(word)? occurences[word] + 1: 1;
  })

  let arr = [];
  for (const ele of Object.keys(occurences)) {
    arr.push([ele, occurences[ele]]);
  }

  arr = arr.sort((a,b) => {
    if (b[1] === a[1]) {
        return a[0].localeCompare(b[0]);
    } 
    return b[1] - a[1];
  });

  let ans = [];
  for (let i=0; i<k; i++) {
    ans.push(arr[i][0]);
  }

  return ans;
};


// console.log(topKFrequent(["taran","love","i","leetcode","i","love","coding"], 2));
console.log(topKFrequent(["i","love","leetcode","i","love","coding"], 3));
console.log(topKFrequent(["aaa","aa","a"], 1));