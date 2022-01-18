/**
 * @param {number[][]} points
 * @return {number}
 */
 var findMinArrowShots = function(points) {
    if(!points.length) {
        return 0;
    }
    points.sort((a,b) => a[1] - b[1]);

    console.log(points);
    let arrows = 1, prevEnd = points[0][1];
    for(const [start, end] of points) {
        if(prevEnd < start) {
            prevEnd = end;
            arrows++;
        }
    }
    console.log(arrows);
    return arrows;
};

findMinArrowShots([[10,16],[2,8],[1,6],[7,12]]);
findMinArrowShots([[1,2],[3,4],[5,6],[7,8]]);
findMinArrowShots([[3,9],[7,12],[3,8],[6,8],[9,10],[2,9],[0,9],[3,9],[0,6],[2,8]]);
findMinArrowShots([])
