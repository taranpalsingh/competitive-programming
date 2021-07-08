var binarySearch = function(n, val) {
  let left=1, right=n, mid=null;
  while(left<=right) {
    mid = Math.ceil((left+right)/2);
    // console.log(`left: ${left}`);
    // console.log(`right: ${right}`);
    // console.log(`mid: ${mid}`);

    if(mid>=val) {
      right = mid-1;
    } else {
      left = mid+1;
    }         
  }
  return left;
};

console.log(binarySearch(10,4));
console.log(binarySearch(10,1));
console.log(binarySearch(10,2));
console.log(binarySearch(10,3));
console.log(binarySearch(10,5));
console.log(binarySearch(10,6));
console.log(binarySearch(10,10));