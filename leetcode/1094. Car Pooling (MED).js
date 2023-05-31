/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    let arr = new Array(1001).fill(0);
    trips.forEach(trip => {
        arr[trip[1]] += trip[0];
        arr[trip[2]] -= trip[0];
    })
    let riders = 0;
    // console.log(arr)
    for (let i=0; i<arr.length; i++) {
        riders += arr[i];
        if (riders > capacity)
            return false
    }
    return true;
};