/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let j=0;
  for(let i=0; i<chars.length; i++) {
      let count = 1;
      while (i + count < chars.length && chars[i + count] === chars[i + count - 1]) {
          count++;
      }
      chars[j++] = chars[i];
      if (count > 1) {
          count.toString().split('').forEach(element => {
              chars[j++] = element;
          })
      }
      i += count - 1;
  }
  return j;
};