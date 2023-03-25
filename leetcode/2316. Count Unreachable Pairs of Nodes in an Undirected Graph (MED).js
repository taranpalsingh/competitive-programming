/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPairs = function(n, edges) {
  const graph = new Array(n).fill().map(ele => []);

  for (const [a,b] of edges) {
      graph[a].push(b);
      graph[b].push(a);
  }
  console.log(graph);

  const visited = new Array(n).fill(0);

  var helper = (node, count) => {
      visited[node] = 1;
      // count++;

      for (const x of graph[node]) {
          if (visited[x]) continue;
          count = helper(x, count + 1);
      }
      return count;
  }

  let total = 0;

  for (i=0; i<n; i++) {
      // console.log(`i: ${i}`);
      if (visited[i]) continue;
      let current = helper(i, 1);
      // console.log(`current: ${current}`);
      total += current*(n - current);
      // console.log(`total: ${total}`);
  }

  return Math.floor(total/2);
};