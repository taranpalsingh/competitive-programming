/**
 * @param {string} boxes
 * @return {number[]}
 */

var minOperations = function(boxes) {
  const left = Array(boxes.length).fill(0), right = Array(boxes.length).fill(0), result = [];
  let count = boxes[0]==="1"? 1: 0;

  for(let i=1; i<boxes.length; i++) {
    left[i] = left[i-1] + count;
    if(boxes[i] === '1') {
      count++;
    }   
  }
  
  count = boxes[boxes.length-1]==="1"? 1: 0;

  for(let i=boxes.length-2; i>=0; i--) {
    right[i] = right[i+1] + count;
    if(boxes[i] === '1') {
      count++;
    }
  }
  for(let i=0; i<boxes.length; i++) {
    result[i] = right[i] + left[i];
  }

  return result;
};

console.log(minOperations("001011"));
console.log(minOperations("110"));

// 10 minutes
// var minOperations = function(boxes) {
//   const onesArr = [], result = [];
//   boxes.split("").forEach((box, index) => {
//       if(box === '1') {
//           onesArr.push(index)
//       }   
//   })
  
//   boxes.split("").forEach((box, index) => {
//       let count = 0;
//       onesArr.forEach(pos => {
//           count += Math.abs(index-pos);
//       });
  
//       result.push(count);
//   })
//   return result;
// };