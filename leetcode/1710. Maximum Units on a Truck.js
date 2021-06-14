/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
  boxTypes = boxTypes.sort((a,b) => b[1]-a[1])
  let sum = 0;

  for(let box of boxTypes) {      
      if(box[0] < truckSize) {
          const maxSize = box[0]*box[1];
          sum += maxSize;
          truckSize -= box[0];
      } else {
          sum += box[1]*truckSize;
          break;
      }
  }
  return sum;
};

console.log(maximumUnits([[1,3],[2,2],[3,1]], 4))