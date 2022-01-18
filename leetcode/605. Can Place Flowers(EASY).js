/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let index = 0;
  
  if (!n)
    return true;

  while(index <= flowerbed.length && n>0) {

    console.log(`index: ${index}`);
    if(flowerbed[index] === 1) {
      index += 2;
      continue;
    } else if (
      index+1 === flowerbed.length ||
      flowerbed[index+1] === 0
    ) {
      console.log(`can adjust on: ${index}`);
      index += 2;
      n--;
    } else {
      index++;
    }
  }

  if(n) {
    return false;
  }
  return true;
};

console.log(canPlaceFlowers([0,0,1], 1));
console.log(canPlaceFlowers([1,0,0,0,1], 1));
console.log(canPlaceFlowers([1,0,1,0,0,0,1], 1));
console.log(canPlaceFlowers([1,0,0,0,1,0,1], 2));