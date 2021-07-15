/**
 * @param {number} num
 * @return {string}
 */


var intToRoman = function(num) {
  let values = [
    [1000, "M"],
    [900, "CM"],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ];

  let v = 0, result = [];
  while(num > 0) {
    if(num >= values[v][0]) {
      num -= values[v][0];
      result.push(values[v][1])
    } else {
      v++;
    }
  }
  return result.join("");
}

console.log(intToRoman(3));
console.log(intToRoman(4));
console.log(intToRoman(9));
console.log(intToRoman(58));
console.log(intToRoman(1994));
console.log(intToRoman(999));