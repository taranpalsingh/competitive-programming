/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let left=1, right=n, mid=null;
    while(left<=right) {

      mid = Math.floor((left+right)/2);
      const isBad = isBadVersion(mid);

      if(isBad) {
        right = mid-1;
      } else {
        left = mid+1;
      }
    }
    return left;
  };
};

console.log(solution(5,4));
console.log(solution(10,1));
console.log(solution(10,2));
console.log(solution(10,1));