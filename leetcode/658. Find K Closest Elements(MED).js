/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
 
// 2nd & Best Approach: 110ms
var findClosestElements = function(arr, k, x) {
  // Create a new Arr that just contains the difference of the elements with x
  const newArr = [];
  if(k === arr.length) {
    return arr;
  }
  let low=0, high=arr.length-1;
  arr.forEach(ele => {
    newArr.push(Math.abs(ele-x));
  })

  // set the low=0 and high as max Index and then keep on squeezing the window by comparing the values at low abd high
  while(high-low>=k) {
    if(newArr[high] >= newArr[low]) {
      high--;
    } else {
      low++;
    }
  }
  return arr.slice(low, high+1);
};

// 1st Attempt: 128ms
var findClosestElements = function(arr, k, x) {
  // create a new array that contains each index as [element value, diff with x]
  let newArr = [];
  arr.forEach(ele => {
    newArr.push([ele, Math.abs(ele-x)]);
  })
  // sort this new arr on the basis of diff
  newArr = newArr.sort((a,b) => a[1]-b[1])
  // Slice out the first k values wth just the elements
  let results = newArr.slice(0,k).map(x => x[0]);
  // sort the values again
  results = results.sort((a,b) => a-b)
  return results;
};

console.log(findClosestElements([1,2,3,4,5],4,3));
console.log(findClosestElements([1,2,3,4,5],4,-1));
console.log(findClosestElements([-2,-1,1,2,3,4,5],7,3));
console.log(findClosestElements([1],1,1));
console.log(findClosestElements([0,0,0,1,3,5,6,7,8,8],2,2));