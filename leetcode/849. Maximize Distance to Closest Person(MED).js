// 20 min
/**
 * @param {number[]} seats
 * @return {number}
 */
// Very slow solution, but still going with this
var maxDistToClosest = function(seats) {
    const left = Array(seats.length).fill(null);    
    const right = Array(seats.length).fill(null);
    const final = Array(seats.length).fill(null);
    let closest = null, foundFirst = false;

    for(let i=0; i<seats.length; i++) {
        if(seats[i] === 1) {
            closest = 1;
            foundFirst = true;
            continue;
        }
        
        if(!foundFirst) {
            left[i] = null;
            continue;
        }

        left[i] = closest++;
    }

    // console.log(left);

    closest = 0, foundFirst = false;

    for(let i=seats.length-1; i>=0; i--) {
        if(seats[i] === 1) {
            closest = 1
            foundFirst = true;
            continue;
        }
        

        if(!foundFirst) {
            right[i] = null;
            // continue;
        } else {
            right[i] = closest++;
        }

        if(!left[i] && right[i]) {
            final[i] = right[i];
        } else if(!right[i] && left[i]) {
            final[i] = left[i];
        } else {
            final[i] = Math.min(right[i], left[i]);
        }
    }
    // console.log(final);

    let max = -1, maxIndex = null;
    for(let i=0; i<seats.length; i++) {
        if(final[i] && final[i] > max) {
            max = final[i];
            maxIndex = i;
        }
    }
    return max;
};

// better solution is to solve it with pre-zeros, mid-zeros, post-zeros approach
