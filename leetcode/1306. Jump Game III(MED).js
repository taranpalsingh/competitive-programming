/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
 var canReach = function(arr, start) {
    let visited = [];
    const len = arr.length;
    
     var helper = function(start, visited) {
        
        if(arr[start] === 0) {
            return true;
        }
        if(start < 0 || start > len || visited.includes(start)) {
            return false;
        }
        visited.push(start);
         
        const slicingIndexLeft = arr[start]+start;
        const slicingIndexRight = start-arr[start];
        return (helper(slicingIndexLeft, visited) || helper(slicingIndexRight, visited));
    }
    return helper(start, [])
};
