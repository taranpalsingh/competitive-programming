/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
  let arr = [], ans = 0;
  columnTitle.split('').forEach(alpha => {
      arr.push(+(alpha.charCodeAt(0) - 64));
  })
  for(let i=0; i<arr.length; i++) {
      ans = (ans)*26 + arr[i];
  }
  return ans;
};