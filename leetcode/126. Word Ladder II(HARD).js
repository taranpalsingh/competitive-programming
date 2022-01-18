/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {

  let minLength = Infinity, results = [];

  var isProbableNextWord = function(beginWord, word) {
    
    let miss = 1, beginWordIndex = 0;
    for(const char of word) {
      if(char != beginWord[beginWordIndex]) {
        if(miss < 1) {
          return false;
        }
        miss--;
      }
      beginWordIndex++;
    }
    return true;
  }

  var findLaddersHelper = function(beginWord, list, ladder) {

    // If we have reached the endWord
    if(beginWord === endWord) {
      if(ladder.length > minLength) {
        return
      } else if(ladder.length < minLength) {
        minLength = ladder.length;
        results = []
      }
      results.push(ladder);
      return;
    }

    if(ladder.length > minLength) {
      return;
    }

    // visitedWordList just reduces one slice operation while passing the next wordList.
    let visitedWordList = [];

    // comparing beginWord with the wordList
    for(let i=0; i<list.length; i++) {

      if(isProbableNextWord(beginWord, list[i])) {
        let updatedWordList = [...visitedWordList, ...list.slice(i+1,list.length)];
        findLaddersHelper(list[i], updatedWordList, [...ladder, list[i]]);
      }
      visitedWordList.push(list[i]);
    }
  }
  findLaddersHelper(beginWord, wordList, [beginWord]);

  return results;
};

console.log(findLadders("hit", "cog", ["hot","dot","dog","lot","log","cog"]));
// console.log(findLadders("lest", "code", ["lose","log"]));
// console.log(findLadders("leet", "code", ["lest","leet","lose","code","lode","robe","lost"]));
// console.log(findLadders("hit", "cog", ["hot","dot","dog","lot","log"]));