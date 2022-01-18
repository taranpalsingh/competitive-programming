const combinations = (str) => {

}




// console.log(combinations("hack"));

function combine(str){
  const result = [];
  for(let i = 1; i <= Math.pow(2, str.length) - 1; i++)
    // [...str].filter((_, pos) =>  {
      // console.log((i >> pos) & 1);
      // (i >> pos) & 1).join("")
    // })
    result.push([...str].filter((_, pos) => (i >> pos) & 1).join(""));
 return result;
}
console.log(combine('abcd'));