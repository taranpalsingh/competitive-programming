/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
  let n = tokens.length, i = 0, j = tokens.length-1, score = 0;
  tokens = tokens.sort((a,b) => a-b);

  while(i <= j) {

    while(i<n && tokens[i] <= power) {
      power -= tokens[i];
      i++;
      score++;
    }
    
    while(j > i && tokens[i] > power && score > 0) {
      power += tokens[j];
      j--;
      score--;
    }

    if (tokens[i] > power && (score < 1 || i>=j)) {
      break;
    }
  }
  return score;
};

console.log(bagOfTokensScore([100], 50));
console.log(bagOfTokensScore([100, 200], 150));
console.log(bagOfTokensScore([100,200,300,400], 200));
console.log(bagOfTokensScore([100,200,300,400,100], 100));