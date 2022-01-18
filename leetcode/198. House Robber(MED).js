/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const dp = {};
    var maxRob = function(nums) {
        if(dp.hasOwnProperty(nums)) {
            // console.log('used dp')
            return dp[nums];
        }
        if (!nums.length) {
            ans = 0;
        } else if (nums.length === 1) {
            ans = nums[0];
        } else {
            const first = nums[0] + maxRob(nums.slice(2,nums.length));
            let second;
            if(nums.length <= 3) {
                second = nums[1];
            } else {
                second = nums[1] + maxRob(nums.slice(3,nums.length));
            }
            ans = Math.max(first, second);
        }
        dp[nums] = ans;
        return ans;
    }
    
    return maxRob(nums);
};
