/**
 * @param {number} n
 * @return {number}
 */

// 2nd approach, and the best case scenario
// This can also be optimised further a bit by just using 2 arrays of length 5 instead of the 2 objects
// As, we wont have to initialize the values.
// However, this is better to understand the logic
var countVowelPermutation = function(n) {
  let count = 0, vowelCounts = {};
  const vowels = [ 'a', 'e', 'i', 'o', 'u' ], modulo = Math.pow(10,9)+7;
  
  vowels.forEach(vowel => {
    vowelCounts[vowel] = 1
  })

  // var countVowelPermutationHelper = function(n, vowelCounts) {
  for(let i=1; i<n; i++) {
    const newVowelCounts = {};
    // initializing newVowelCount's Object with all vowels and value 0
    vowels.forEach(vowel => {
      newVowelCounts[vowel] = 0
    })

    // number of a's in this iteration = number of e,i,u in the previous iteration 
    newVowelCounts['a'] = (vowelCounts['e'] + vowelCounts['i'] + vowelCounts['u'])%modulo;
    // Similarly, count of e = count of a and i in previous iteration
    newVowelCounts['e'] = (vowelCounts['a'] + vowelCounts['i'])%modulo;
    newVowelCounts['i'] = (vowelCounts['e'] + vowelCounts['o'])%modulo;
    newVowelCounts['o'] = (vowelCounts['i'])%modulo;
    newVowelCounts['u'] = (vowelCounts['i'] + vowelCounts['o'])%modulo;

    vowelCounts = newVowelCounts;
  }
  vowels.forEach(vowel => {
    count += vowelCounts[vowel]
  })
  return count%modulo;
};


console.log(countVowelPermutation(1));
console.log(countVowelPermutation(2));
console.log(countVowelPermutation(3));
console.log(countVowelPermutation(4));
console.log(countVowelPermutation(5));
console.log(countVowelPermutation(6));
console.log(countVowelPermutation(7));
console.log(countVowelPermutation(8));
console.log(countVowelPermutation(9));
console.log(countVowelPermutation(144));

// 1st and the naive approach, givng TLE
// var countVowelPermutation = function(n) {

//   var count = 0;
//   var countVowelPermutationHelper = function(n, str) {

//     if(n===0) {
//       // console.log(str);
//       count++;
//       return;
//     }

//     if(str.length === 0) {
//       const vowels = [ 'a', 'e', 'i', 'o', 'u' ];
//       vowels.forEach(vowel => {
//         countVowelPermutationHelper(n-1, vowel);
//       })
//       return;
//     }

//     switch(str[str.length-1]) {
//       case 'a':
//         countVowelPermutationHelper(n-1, str+'e');
//         break;
//       case 'e':
//         countVowelPermutationHelper(n-1, str+'a');
//         countVowelPermutationHelper(n-1, str+'i');
//         break;
//       case 'i':
//         countVowelPermutationHelper(n-1, str+'a');
//         countVowelPermutationHelper(n-1, str+'e');
//         countVowelPermutationHelper(n-1, str+'o');
//         countVowelPermutationHelper(n-1, str+'u');
//         break;    
//       case 'o':
//         countVowelPermutationHelper(n-1, str+'i');
//         countVowelPermutationHelper(n-1, str+'u');
//         break;    
//       case 'u':
//         countVowelPermutationHelper(n-1, str+'a');
//         break;    
//     }
//   }
//   countVowelPermutationHelper(n, '')
//   return count%(Math.pow(10,9)+7);
// };
