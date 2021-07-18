/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
  const brokenLettersObj = {};
  let count = 0;

  brokenLetters.split("").forEach(letter => {
    brokenLettersObj[letter] =  brokenLettersObj.hasOwnProperty(letter) ? brokenLetters[letter]+1: 1;
  })

  text.split(" ").forEach(word => {
    let allGood = true;
    for(let i=0; i<word.length; i++) {
      if( brokenLettersObj.hasOwnProperty(word[i])) {
        allGood = false;
      }
    }

    if(allGood) {
      count++;
    }
  })
    
  return count;
};