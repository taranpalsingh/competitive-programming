/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(arr) {
  // let maxProfit = 0;
  let profit = 0, n=arr.length;
  let buy = arr[0], sell = 0, i=0;

  console.log(arr);
  while (i<n) {
    // find buy point
    while (i<n && arr[i+1] <= arr[i]) {
      i++;
    }
    buy = arr[i];

    while (i<n && arr[i+1] >= arr[i]) {
      i++;
    }
    sell = arr[i];
    profit += (sell - buy);
    console.log(`buy: ${buy}, sell: ${sell}`);
    i++;
  }

  return profit;
  // for (let i=0; i<arr.length; i++) {
  //   console.log(arr[i]);
  //   if (arr[i] < buy) {
  //     if (profit) {
  //       console.log(`buy: ${buy}, sell: ${arr[i-1]}`);
  //       maxProfit+=profit;
  //       profit = 0;
  //     }
  //     buy = arr[i];
  //     console.log('buy changed');
  //     continue;
  //   }

  //   let currprofit = arr[i] - buy;
  //   if (currprofit > profit) {
  //     profit = currprofit;
  //     console.log('update profit');
  //     continue;
  //   } else if (currprofit < profit) {
  //     console.log(`buy: ${buy}, sell: ${arr[i-1]}`);
  //     maxProfit+=profit;
  //     profit = 0;
  //     buy = arr[i];
  //   }
  // }  

  // if (profit) {
  //   console.log(`buy: ${buy}, sell: ${arr[arr.length-1]}`);
  //   maxProfit+=profit;
  // }
  
  // return maxProfit;
};

// console.log(maxProfit([7,1,5,3,6,4]));
// console.log(maxProfit([1,2,3,4,5]));
// console.log(maxProfit([7,6,4,3,1]));
// console.log(maxProfit([2,1,2,0,1]));