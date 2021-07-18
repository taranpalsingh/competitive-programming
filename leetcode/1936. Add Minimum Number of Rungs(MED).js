/**
 * @param {number[]} rungs
 * @param {number} dist
 * @return {number}
 */
// 14 minutes
var addRungs = function(rungs, dist) {
  const rungLength = rungs.length, lastRung = rungs[rungLength-1];
  let pos = 0, index = 0, newRungs = 0;
  while(pos < lastRung) {
      if(pos + dist < rungs[index]) {
          const newRungsCount = Math.ceil((rungs[index]-pos)/dist -1);
          newRungs += newRungsCount;
      }
      pos = rungs[index];
      index++;
  }
  return newRungs;
};