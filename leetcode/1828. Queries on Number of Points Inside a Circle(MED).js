/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function(points, queries) {
    const result = [];
    
    queries.forEach(query => {
        let count = 0;
        for(const point of points) {
            if(Math.sqrt(Math.pow(point[0] - query[0], 2) + Math.pow(point[1] - query[1], 2)) <= query[2]) {
                count++;
            }
        }
        result.push(count);
    })
    return result;
};

console.log(countPoints([[1,3],[3,3],[5,3],[2,2]], [[2,3,1],[4,3,1],[1,1,2]]));