/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
    let odd = 0, even = 0;
    
    for(let n=0; n<position.length; n++) {
        if (position[n]%2) {
            odd ++;
        } else {
            even ++;
        }
    }
    return Math.min(odd, even)

};
