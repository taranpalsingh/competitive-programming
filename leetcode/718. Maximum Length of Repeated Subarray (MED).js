/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
  const occurences = {};
  let maxScore = 0;
  const dp = new Array(nums1.length + 1).fill().map(_ => new Array(nums2.length + 1).fill(null));

  console.log(dp);
  var helper = function(index1, index2) {
    if (dp[index1][index2] != null) {
      console.log('dp used');
      return dp[index1][index2];
    }

    console.log(`helper: ${nums1[index1]}`);
    let score = 0;
    if (maxScore > (nums2.length - index2)) {
      return maxScore;
    }
    while (nums1[index1] === nums2[index2]) {
      if (index1 >= nums1.length || index2 >= nums2.length) {
        dp[index1][index2] = score;
        return score;
      }
      index1++;
      index2++;
      score++;
    }
    // console.log(score);
    dp[index1][index2] = score;
    return score;
  }

  nums1.forEach((num, index) => {
    if (occurences.hasOwnProperty(num)) {
      occurences[num].push(index);
    } else {
      occurences[num] = [index];
    }
  });

  console.log(occurences);

  for (let i=0; i<nums2.length; i++) {
    if (occurences.hasOwnProperty(nums2[i])) {
      occurences[nums2[i]].forEach(index => {
        let score = helper(index, i);
        maxScore = Math.max(maxScore, score);
      })
    }
  }

  console.log(dp);
  return maxScore;
};

// console.log(findLength([1,2,3,2,1], [3,2,1,4,7]));
console.log(findLength([0,0,0,0,0], [0,0,0,0,0]));
