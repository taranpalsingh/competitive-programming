/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let arr = new Array(26).fill(0);
  s = s.toLowerCase().split('');
  
  s.forEach((char, index) => {
      arr[char.charCodeAt(0) - 97]++;
  });

  for (let i=0; i<s.length; i++) {
      console.log(arr[s[i].charCodeAt(0) - 97])
      if (arr[s[i].charCodeAt(0) - 97] === 1)
          return i;
  }

  return -1;
};