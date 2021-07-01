/**
 * @param {number} n
 * @return {number[]}
 */


// Trick Question 
// Not really asked in interviews
var grayCode = function(n) {
  const results = [0];

  if(n===0) 
    return results;

  results.push(1);
  let curr=1;
  for(let i=2; i<=n; i++) {
    curr *= 2;
    for(let j=results.length-1; j>=0; j--) {
      results.push(curr + results[j]);
    }
  }
  return results;
};

console.log(grayCode(2));
console.log(grayCode(3));
