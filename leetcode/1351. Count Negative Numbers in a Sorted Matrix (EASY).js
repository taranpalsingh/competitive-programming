/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    var getNegativeIndex = (arr) => {
        let l = 0, h = n-1, index = n;
        while (l <= h) {
            mid = Math.floor((l+h)/2);
            if (arr[mid] < 0) {
                index = mid;
                h = mid-1;
            } else if (arr[mid] >= 0) {
                l = mid+1;
            }
        }
        return index;
    }
    const m = grid.length, n = grid[0].length;
    let ans = 0;
    for (let i=0; i<m; i++) {
        const index = getNegativeIndex(grid[i])
        ans += (n - index);
    }
    return ans;
};