/**
 * @param {number[]} arr
 * @return {number[]}
 */


// class Solution {
//   public int[] threeEqualParts(int[] arr) {
//     int[] ans = new int[] {-1,-1};

//     // num Of 1
//     int numOf1s = 0;
//     for (int el : arr) {
//       numOf1s += el;
//     }

//     if (numOf1s == 0) {
//       return new int[]{0, arr.length-1};
//     }

//     if (numOf1s % 3 != 0) {
//       return ans;
//     }

//     int noOfOnesInEachPart = numOf1s / 3;
//     int indexOfFirst1InPart0 = -1;
//     int indexOfFirst1InPart1 = -1;
//     int indexOfFirst1InPart2 = -1;
//     numOf1s = 0;
//     for (int i = 0; i < arr.length; i++) {
//       if (arr[i] == 1) {
//         numOf1s++;
//         if (numOf1s == noOfOnesInEachPart + 1) {
//           indexOfFirst1InPart1 = i;
//         } else if (numOf1s == 2 * noOfOnesInEachPart + 1) {
//           indexOfFirst1InPart2 = i;
//         } else if (numOf1s == 1) {
//           indexOfFirst1InPart0 = i;
//         }
//       }
//     }

//     while (indexOfFirst1InPart2 < arr.length) {
//       if (arr[indexOfFirst1InPart2] == arr[indexOfFirst1InPart0] && arr[indexOfFirst1InPart2] == arr[indexOfFirst1InPart1]) {
//         indexOfFirst1InPart2++;
//         indexOfFirst1InPart1++;
//         indexOfFirst1InPart0++;
//       } else {
//         return ans;
//       }
//     }

//     return new int[]{indexOfFirst1InPart0 - 1, indexOfFirst1InPart1};
//   }
// }


// Working for 183/193 cases
var threeEqualParts = function(arr) {
  
  const arrLength = arr.length;
  const sum = arr.reduce((acc, curr) => acc+curr);
  if(sum === 0) {
    return [0, arrLength-1];
  }
  if(sum%3 != 0) {
    return [-1,-1];
  }
  const maxOnes = sum/3;

  let left = 0, right = arrLength-1;
  let count = 0, endingZerosCount = 0, first1Found = false; 

  // getting the right tentative divider
  while(count < maxOnes) {
    if(!first1Found && arr[right] === 0) {
      endingZerosCount++;
    }

    if(arr[right] === 1) {
      count++;
      first1Found = true;
    }
    right--;
  }

  // getting the left final value for right, if there were any ending zeros in 3rd part. 
  let lastOneIndex2ndPart = right;
  while(left<lastOneIndex2ndPart) {
    if(arr[lastOneIndex2ndPart] === 1) {
      break;
    }
    lastOneIndex2ndPart--;
  }

  right = lastOneIndex2ndPart + endingZerosCount;

  count = 0;
  // getting the left tentative divider
  while(count < maxOnes) {
    if(arr[left] === 1) {
      count++;
    }
    left++;
  }

  // getting the left final divider, if there were any ending zeros in 3rd part. 
  if(endingZerosCount > 0) {
    count = endingZerosCount;
    while(count > 0) {
      if(arr[left] === 1) {
        // console.log("Sorry, found 1");
      }
      left++;
      count--;
    }
  }

  const first = parseInt(arr.slice(0, left).join(""), 2);
  const second = parseInt(arr.slice(left, right + 1).join(""), 2);
  const third = parseInt(arr.slice(right + 1, arrLength).join(""), 2);

  if(first === second && second === third) {
    return [--left, ++right];
  } else {
    return [-1,-1]
  }
};

console.log(threeEqualParts([1,0,1,0,1]));
console.log(threeEqualParts([1,1,0,0,1]));
console.log(threeEqualParts([0,1,0,1,1]));
console.log(threeEqualParts([0,0,0,0,0]));