/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
  const src = {}, dst = {};
  const graph = new Array(n).fill().map(ele => []);

  for (const [a,b] of connections) {
      graph[a].push([b,1]);
      graph[b].push([a,0]);
  }

  let ans = 0, visited = {};
  var helper = (node) => {
      visited[node] = 1;
      for (const [b,cost] of graph[node]) {
          if (visited[b]) continue;
          if (cost) ans++;
          helper(b);
      }
  }

  helper(0);
  return ans;
};