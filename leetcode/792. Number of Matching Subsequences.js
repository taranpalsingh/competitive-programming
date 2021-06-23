// 2nd Approach
var numMatchingSubseq = function(s, words) {
  let count = 0;
  let wordsObj = {};
  const sLength = s.length;

  for(const word of words) {
    if(wordsObj.hasOwnProperty(word)) {
      wordsObj[word]["occurence"] += 1;
    } else {
      wordsObj[word] = {
        index: 0,
        occurence: 1
      }
    }
  }
  
  for(let i=0; i<sLength; i++) {
    for(const word of Object.keys(wordsObj)) {
      if(word[wordsObj[word].index] === s[i]) {
        wordsObj[word].index += 1;
        if(wordsObj[word].index === word.length) {
          count += wordsObj[word].occurence;
          delete wordsObj[word];
        }  
      }
    }
  }
  return count
};

console.log(numMatchingSubseq("abcde", ["a", "a", "bb","acd","ace", "a"]));
console.log(numMatchingSubseq("dsahjpjauf", ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"]));



// 3rd and best approach, but is only passing 41/50 cases, needs a bit more debugging
// var numMatchingSubseq = function(s, words) {
//   let count = 0;
//   let alphabets = {};
//   for(let i=0; i<26; i++) {
//     alphabets[String.fromCharCode(97+i)] = [];
//   }
  
//   const sLength = s.length;

//   for(const word of words) {
//     if(alphabets[word[0]][word]) {
//       alphabets[word[0]][word] += 1;
//     } else {
//       alphabets[word[0]][word] = 1;
//     }
//   }
  
//   for(let i=0; i<sLength; i++) {
//     const wordsFromChar = alphabets[s[i]];
//     for(const word of Object.keys(wordsFromChar)) {
//       if(word.length > sLength-i) {
//         console.log("deleting");
//         delete alphabets[word[0]][word];
//       }

//       if(word.length === 1) {

//         count += alphabets[word[0]][word];
//         delete alphabets[word[0]][word];
//       } else {
//         const newWord = word.slice(1,word.length);
//         appendToAlphabets(alphabets, newWord, alphabets[word[0]][word])
//         delete alphabets[word[0]][word];
//       }
//     }
//   }
//   return count;
// }

// var appendToAlphabets = (alphabets, word, occurence) => {
//   if(alphabets[word[0]][word]) {
//     alphabets[word[0]][word] += occurence;
//   } else {
//     alphabets[word[0]][word] = occurence;
//   }
// }






// 1st Approach

// var numMatchingSubseq = function(s, words) {
//   let count = 0;
//   let dp = {};
//   const sLength = s.length;

//   for(const word of words) {
//     let j =0;
//     if(dp.hasOwnProperty(word)) {
//       count += dp[word]
//       continue;
//     }

//     const wordLength = word.length;

//     for(let i=0; i<sLength; i++) {
//       if(wordLength-j > sLength-i) {
//         break;
//       }
//       if(word[j]===s[i]) {
//         j++;
//       }
//     }

//     if(j===word.length) {
//       count++;
//       dp[word] = 1;
//     } else {
//       dp[word] = 0;
//     }
//   }  
//   return count
// };
