/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function(n) {
  // need to use BigInt in this question as the limit crosses 2^53-1.
  // either use BigInt() or append 'n' at the end of a number
  const mod = BigInt(Math.pow(10,9)+7);

  var calculatePower = function(num, power) {

    if(power===0)
      return 1n;
        
    // num^power = num^(power/2) * num^(power/2)
    let ans = 1n;
    ans = calculatePower(num, Math.floor(power/2));

    ans*=ans;
    ans%=mod;
    // If the power is odd, we need to multiply the number once more.
    if(power%2) 
      ans*=BigInt(num);

    return ans%mod;
  }

  if(n%2===0) {
    return Number((calculatePower(4,n/2) * calculatePower(5,n/2))%mod);
  } else { 
    return Number((calculatePower(4,Math.floor(n/2)) * calculatePower(5,(Math.floor((n/2)+1))))%mod);
  }
};

console.log(countGoodNumbers(1));
console.log(countGoodNumbers(2));
console.log(countGoodNumbers(3));
console.log(countGoodNumbers(4));
console.log(countGoodNumbers(5));
console.log(countGoodNumbers(50));

