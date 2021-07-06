/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    const numObj = {}, arrLength = arr.length;

    // creating a hashmap for the elements in arr with their occurences values
    arr.forEach(num => {
      numObj[num] = (numObj.hasOwnProperty(num))? numObj[num]+1: 1;
    })

    // taking out just the values of occurences and sorting them.
    const sortedOccurences = Object.values(numObj).sort();

    let newLength=0, count=0, i=sortedOccurences.length-1;

    // starting from last (max occurence), remove elements 1 by 1 
    // till the removed instances are less than half length of arr. 
    while(newLength < arrLength/2) {
      newLength += sortedOccurences[i];
      count++;
      i--;
    }

    return count
};


console.log(minSetSize([3,3,3,3,5,5,5,2,2,7]));
console.log(minSetSize([7,7,7,7,7,7]));
console.log(minSetSize([1,9]));
console.log(minSetSize([1000,1000,3,7]));
console.log(minSetSize([1,2,3,4,5,6,7,8,9,10]));