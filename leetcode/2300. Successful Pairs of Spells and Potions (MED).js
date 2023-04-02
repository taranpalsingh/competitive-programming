/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
  potions = potions.sort((a,b) => a-b);

  let ans = new Array(spells.length).fill(0);
  for (let i=0; i<spells.length; i++) {
      // console.log('for loop')
      // console.log(i)
      let low = 0, high = potions.length-1, mid, index = potions.length; 
      while (low <= high) {
          mid = Math.ceil((low+high)/2);
          if (potions[mid]*spells[i] >= success)  {
              index = mid;
              high = mid-1;
              // console.log('found')

          } else 
              low = mid+1;
      }
      // console.log(index)
      ans[i] = potions.length - index;
  }
  return ans;
};