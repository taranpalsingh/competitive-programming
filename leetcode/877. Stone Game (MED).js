/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
  

  var stoneGameHelper = function(piles, alex, lee, alexTurn) {
    console.log(piles);

    if(piles.length === 0){
      console.log(`alex: ${alex}`);
      console.log(`lee: ${lee}`);
      console.log("rturning", alex > lee);
      return alex > lee;
    }

    let beginning, end;
    const firstVal = piles[0], lastVal = piles[piles.length - 1];

    if(alexTurn) {
      beginning = stoneGameHelper(piles.slice(1, piles.length), alex + firstVal, lee, false)
      end = stoneGameHelper(piles.slice(0, piles.length - 1), alex + lastVal, lee, false)
    } else {
      beginning = stoneGameHelper(piles.slice(1, piles.length), alex, lee + firstVal, true)
      end = stoneGameHelper(piles.slice(0, piles.length - 1), alex, lee + lastVal, true);
    }

    return beginning || end;
  };

  return stoneGameHelper(piles, 0, 0, true);
};

console.log(stoneGame([5,3,4,5]));