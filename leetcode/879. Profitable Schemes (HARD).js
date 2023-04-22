/**
 * @param {number} n
 * @param {number} minProfit
 * @param {number[]} group
 * @param {number[]} profit
 * @return {number}
 */
var profitableSchemes = function(n, minProfit, group, profit) {

  const mod = 1000000007;
  const dp = new Array(n).fill().map(_ => new Array(group.length).fill().map(__ => new Array(minProfit+1).fill(-1)));

  console.log(dp);
  var helper = (nPending, profitPending, index, debugArr) => {
    if (nPending < 0) {
      return 0;
    }

    if (index === group.length) {
        if (profitPending <= 0) {
            return 1;
        }
        return 0;
    }

    if (dp[nPending][index][profitPending] != -1) 
      return dp[nPending][index][profitPending];
    const taken = helper(nPending - group[index], profitPending - profit[index], index+1, [...debugArr, index]);
    const notTaken = helper(nPending, profitPending, index+1, debugArr);

    dp[nPending][index][profitPending] = (taken + notTaken) % mod
    return dp[nPending][index][profitPending];
  }
  return helper(n, minProfit, 0, [])  % mod;
};



// var profitableSchemes = function(n, minProfit, group, profit) {

//   let count = 0, arr = [];
//   const mod = 1000000007;

//   group.forEach((g, index) => {
//     arr.push([group[index],profit[index]]);
//   })
//   // console.log(arr);

//   arr = arr.sort((a, b) => {
//     // console.log(a[0]);
//     if (a[0] == b[0]) {
//       return b[1] - a[1];
//     }
//     return a[0] - b[0];
//   });
//   // console.log(arr);
//   // sort arrs in asc of group 

//   var helper = (nPending, profitPending, index, debugArr) => {
    
//     if (profitPending <= 0) {
//       // console.log('Yo---------');
//       // console.log(debugArr);
//       count = (count + 1) % mod;
//     }

//     if (nPending <= 0) {
//       return;
//     }

//     // console.log(`n: ${nPending},p: ${profitPending},index: ${index}`);
//     for (let i=index+1; i<arr.length; i++) {
//       const [g, p] = [...arr[i]];
      
//       if (g > nPending) 
//         break;
//         helper(nPending - g, profitPending - p, i, [...debugArr, i]);
//     }
//   }
//   helper(n, minProfit, -1, []);
//   return count % mod;
// };
