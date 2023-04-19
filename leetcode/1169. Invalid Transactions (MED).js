var invalidTransactions = function(transactions) {
  const nameList = [];
  const timeList = [];
  const amountList = [];
  const locationList = [];
  const map = new Map();
  for(let i = 0; i < transactions.length; i++){
      map.set(i, false);
  }
  const ans = [];
  transactions.forEach(element => {
      const t = element.split(',');
      nameList.push(t[0]);
      timeList.push(Number(t[1]));
      amountList.push(Number(t[2]));
      locationList.push(t[3]);
  });
  for(let i = 0; i < transactions.length; i++) {
      if(amountList[i] > 1000) {
          map.set(i, true);
      }
      for(let j = i + 1; j < transactions.length; j++) {
          if(nameList[i] === nameList[j] && Math.abs(timeList[i] - timeList[j]) <= 60 && locationList[i] !==                   locationList[j]){
              map.set(i, true);
              map.set(j, true);
          }
      }
  }
  map.forEach((value, index) => {
      if(value) {
          ans.push(transactions[index]);
      }
  })
  return ans;
};