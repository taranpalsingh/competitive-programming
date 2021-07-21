/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */


var findingUsersActiveMinutes = function(logs, k) {
  const logsArr = Array(k).fill(0), logsObj = {};
  
  for(const [id, time] of logs) {
    if(!logsObj.hasOwnProperty(id)) {
      logsObj[id] = new Set();
    }
    logsObj[id].add(time);
  }

  for(const key of Object.keys(logsObj)) {
    const len = logsObj[key].size;
    logsArr[len-1] = logsArr[len-1]+1; 
  }
  return logsArr;
};

// var findingUsersActiveMinutes = function(logs, k) {
//   const logsArr = Array(k).fill(0), logsObj = {};
  
//   for(const log of logs) {
//     if(!logsObj.hasOwnProperty(log[0])) {
//       logsObj[log[0]] = {};
//     }
//     const obj = logsObj[log[0]];
//     obj[log[1]] = 1;
//     logsObj[log[0]] = obj;
//     // logsArr[+log[0]][''+log[1]] = logsArr[+log[0]].hasOwnProperty([log[1]]) ? logsArr[+log[0]][log[1]]+1: 1
//     // logsArr[+log[0]][''+log[1]] = 1;
//   }

//   for(const key of Object.keys(logsObj)) {
//     const len = Object.keys(logsObj[key]).length;
//     logsArr[len-1] = logsArr[len-1]+1; 
//   }
//   return logsArr;
// };

console.log(findingUsersActiveMinutes([[0,5],[1,2],[0,2],[0,5],[1,3]], 5));
console.log(findingUsersActiveMinutes( [[1,1],[2,2],[2,3]], 4));