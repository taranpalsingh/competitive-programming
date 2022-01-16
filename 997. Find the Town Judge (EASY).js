/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
// 2:21
var findJudge = function(n, trust) {
    const arr = Array(n + 1).fill(0);
    arr[0] = -1;

    if(trust.length === 1){
        return trust[0][1];
    }
    
    for (const [trusts, potJudge] of trust) {
    
        if(arr[potJudge] != -1)
            arr[potJudge]++;    
        arr[trusts] = -1;
    }

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === n-1) {
            return i;
        }
    }
    return -1;
};
