/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var buildKey = function(str) {
  let arr = Array(26).fill(0);

  for(const char of str) {
    const pos = char.charCodeAt(0) - 97
    arr[pos]++;
  }
  return arr;
}

var groupAnagrams = function(strs) {
  let result = {};
  for(const str of strs) {
    const key = buildKey(str);
    if(result.hasOwnProperty(key)) {
      result[key].push(str)
    } else {
      result[key] = [str];
    }
  }
  return Object.values(result)
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat","taran", "narat", "eet"]));