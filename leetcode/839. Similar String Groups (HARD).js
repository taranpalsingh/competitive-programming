/**
 * @param {string[]} strs
 * @return {number}
 */
var numSimilarGroups = function(strs) {

  let groups = 0, visited = {};
  
  var dfs = function(s) {

    for (let i=0; i<strs.length; i++) {
      if (visited[strs[i]]) continue;
      if (isSimilar(strs[i], s)) {
        visited[strs[i]] = 1;
        dfs(strs[i]);
      }
    }
  }

  var isSimilar = function(a, b) {
    let count = 0;
    for (let i=0; i<a.length; i++) {
      if (a[i] != b[i]) count++;
    }
    return (count === 2 || count === 0);
  }

  for (let i=0; i<strs.length; i++) {
    if (visited[strs[i]]) continue;
    groups++;
    visited[strs[i]] = 1;
    dfs(strs[i]);
  }

  return groups;
};

console.log(numSimilarGroups(["tars","rats","arts","star"]));