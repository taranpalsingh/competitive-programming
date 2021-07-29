
// works
const merge = (a, b) => {
  let [left, right] = [0, 0]
  let merged = [];

  while(left < a.length  && right < b.length) {
    if(a[left] < b[right]) {
      merged.push(a[left]);
      left++;
    } else {
      merged.push(b[right]);
      right++;
    }
  }

  if(left < a.length) {
    merged = [...merged, ...a.slice(left, a.length)]
  } else if(right < b.length) {
    merged = [...merged, ...b.slice(right, b.length)]
  }

  return merged;
}

const mergeSort = (a) => {

  if(a.length === 1) {
    return a;
  }
  const mid = (a.length%2 === 0) ? a.length/2 : Math.floor(a.length/2);

  const left = mergeSort(a.slice(0, mid))
  const right = mergeSort(a.slice(mid, a.length))

  return merge(left, right)
}

console.log(mergeSort([4,3,5,6,2,1,8]));



// In place approach, not working rn
// const merge = (a, left, ave, right) => {
//   let [leftArr, rightArr] = [[], []];
//   let mid = ave;
//   let count = 0, merged = [];
//   for(let i=left; i<ave; i++) {
//     leftArr.push(a[i]);
//   }
//   for(let i=ave; i<right; i++) {
//     rightArr.push(a[i]);
//   }

//   console.log(`leftArr: ${leftArr}`);
//   console.log(`rightArr: ${rightArr}`);
//   while(left < mid  && ave < right) {
//     if(a[left] < a[ave]) {
//       merged.push(a[left]);
//       left++;
//     } else {
//       merged.push(a[ave]);
//       ave++;
//     }
//   }

//   if(left < mid) {
//     merged = [...merged, ...a.slice(left, mid)]
//   } else if(ave < right) {
//     merged = [...merged, ...a.slice(ave, right)]
//   }

//   return merged;
// }

// const mergeSort = (a, left, right) => {

//   console.log(a.slice(left, right));
//   let count = 0;
//   if(right - left === 1) {
//     return ;
//   }
//   const mid = ((right+left)%2 === 0) ? (right+left)/2 : Math.floor((right+left)/2);

//   count += mergeSort(a, left, mid)
//   count += mergeSort(a, mid, right)

//   return merge(a, left, mid, right);
//   // return count;
// }

// const sort = (a) => {
//   return mergeSort(a, 0, a.length);
// }

// console.log(sort([4,3,5,6,2,1,8]));

