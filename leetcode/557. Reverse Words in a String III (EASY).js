/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let ans = '';

  s.split(" ").forEach(ele => {
    let updated = '';
    for (let i=ele.length-1; i>=0; i--) {
      updated += ele[i];
    }
    ans += ' ' + updated;
  })
  return ans.slice(1, ans.length);
};

console.log(reverseWords("Let's take LeetCode contest"));
console.log(reverseWords("God Ding"));