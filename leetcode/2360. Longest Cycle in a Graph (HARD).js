/**
 * @param {number[]} edges
 * @return {number}
 */
var longestCycle = function(edges) {
  let best = -1;
  const visited = new Array(edges.length).fill(0);

  var helper = (node) => {
      let t = 0, obj = {};
      obj[node] = t++;
      // obj[node] = t;
      while (!visited[node]) {
          // console.log(node)
          visited[node] = 1;
          node = edges[node];
          if (node === -1) return;
          if (node in obj) {
              // console.log('found cycle');
              // console.log(t);
              // console.log(obj[node]);
              best = Math.max(best, t - obj[node]);
              return;
          } 
          obj[node] = t++;
      }
  }

  for (let i=0; i<edges.length; i++) {
      if (!visited[i] && edges[i] != -1)
          helper(i);

      visited[i] = 1;
  }
  return best;
};