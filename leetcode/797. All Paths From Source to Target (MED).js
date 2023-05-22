/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {

    let paths = [];
    var helper = (node, path) => {
        if (node === graph.length-1) {
            paths.push([...path]);
            return;
        }
        for (const d of graph[node]) {
            helper(d, [...path, d]);
        }    
    }
    helper(0, [0]);
    return paths;    
};