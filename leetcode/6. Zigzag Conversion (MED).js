/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows <= 1)
      return s;
  let str = '', offset = numRows*2 - 2;
  let i = 0;
  while (i < s.length) {
      str += s[i];
      i += offset;
  }
  // console.log(str);
  for (let row=1; row<numRows-1; row++) {
      
      i = row;
      while (i < s.length) {
          str += s[i];
          const offset2 = (numRows - row - 1)*2;
          if (i + offset2 < s.length)
              str += s[i + offset2];
          i += (offset);
      }
      // console.log(str);
  }

  i = numRows - 1;
  while (i < s.length) {
      str += s[i];
      i += offset;
  }
  // console.log(str);
  return str;
};

