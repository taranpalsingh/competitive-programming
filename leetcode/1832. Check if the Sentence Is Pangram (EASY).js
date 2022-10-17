/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
  let alphabets = new Array(26).fill(0)
  
  sentence.split('').forEach(char => {
    alphabets[char.charCodeAt(0) - 97] = 1;
  })

  let sum = 0;
  alphabets.forEach(char => {
    sum += char;
  })

  return sum === 26;
};

console.log(checkIfPangram('thequickbrownfoxjumpsoverthelazydog'));