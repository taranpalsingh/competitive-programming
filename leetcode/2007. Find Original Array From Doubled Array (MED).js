/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function(changed) {

    let ans = [], count = 0;
    if (changed.length%2 != 0) {
      return [];
    }

    let freq = new Array(10001).fill(0);

    changed.forEach(ele => {
      freq[ele]++;
    })

    if (freq[0]%2 != 0) {
      return [];
    }

    if (freq[0]) {
      ans = new Array(freq[0]/2).fill(0);
      freq[0] = 0;
    }

    for(let i=1; i<freq.length; i++) {
     
      if (freq[i] > 0 && freq[i*2] >= freq[i]) {
        for (let j=0; j<freq[i]; j++) {
          ans.push(i);
        }
        freq[i*2]-=freq[i];
        freq[i]-=freq[i];
      }
    }

    for (const val of freq) {
      if (val != 0) {
        return [];
      }
    }
    
    return ans;
};

// console.log(findOriginalArray([1,2,6,8,3,5]));
// console.log(findOriginalArray([1,3,4,2,6,8]));
// console.log(findOriginalArray([1,3,2,4,6,8]));
// console.log(findOriginalArray([6,3,0,1]));
// console.log(findOriginalArray([0,0,3,3,6,6,6,12]));
// console.log(findOriginalArray([40,7,78,12,40,28,33,27,35,90,56,44,42,38,36,3,12,68,86,14,27,80,33,40,12,74,20,50,15,54,76,13,40,3,43,88,14,54,20,0,100,10,23,30,27,50,84,24,15,45,94,66,6,22,20,34,25,100,28,6,37,10,18,82,96,0,76,40,32,33,48,70,24,80,20,40,50,4,19,25,66,38,46,44,98,47,26,54,38,39,41,20,49,8,16,6,50,30,20,66]));
console.log(findOriginalArray([5,10,20,10,0,0]));