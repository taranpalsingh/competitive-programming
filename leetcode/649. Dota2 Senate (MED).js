/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
  const rQueue = [], dQueue = [];
  let i = senate.length;
  senate.split('').forEach((a, index) => {
      if (a === 'R')
          rQueue.push(index);
      else
          dQueue.push(index);
  })

  while (rQueue.length && dQueue.length) {
      const r = rQueue.shift();
      const d = dQueue.shift();
      if (r < d) {
          rQueue.push(r + i++)
      } else {
          dQueue.push(d + i++)
      }        
  }

  return rQueue.length > 0 ? "Radiant": "Dire" 
};