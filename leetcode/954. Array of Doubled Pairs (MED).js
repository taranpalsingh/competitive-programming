/**
 * @param {number[]} arr
 * @return {boolean}
 */
var decreaseOccurenceCount = function(obj, key) {
  if(obj[key] > 1) {
    obj[key]--
  } else {
    delete obj[key];
  }
}

var canReorderDoubled = function(arr) {
  arr = arr.sort((a,b) => a-b);
  const occurenceObj = {}

  arr.forEach(ele => {
    occurenceObj[ele] = (occurenceObj.hasOwnProperty(ele)) ? occurenceObj[ele] + 1: 1;
  })

  // checking the occurences of 0.
  if(occurenceObj.hasOwnProperty('0')) {
    if(occurenceObj['0'] % 2 === 0) {
      delete occurenceObj['0'];
    } else {
      return false;
    }
  }

  for(let i=0; i < arr.length; i++) {
    console.log(arr[i]);
    if(!occurenceObj[arr[i]]) {
      continue;
    }
    if(arr[i] > 0) {
      if(occurenceObj.hasOwnProperty(2 * arr[i])) {
        decreaseOccurenceCount(occurenceObj, arr[i])
        decreaseOccurenceCount(occurenceObj, 2 * arr[i])
      } else {
        return false;
      }
    }
    else if(arr[i] < 0) {
      if(occurenceObj.hasOwnProperty(arr[i] / 2)) {

        decreaseOccurenceCount(occurenceObj, arr[i])
        decreaseOccurenceCount(occurenceObj, arr[i] / 2)
      } else {
        return false;
      }
    }
  }
  return true;
};

// console.log(canReorderDoubled([-3,-5]));
// console.log(canReorderDoubled([-2,2,4,-4]));
console.log(canReorderDoubled([2,1,1,4,8,2,8]));