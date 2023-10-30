
var maxSubArray = function(nums) {
    let sum;
    for (let extI = 0; extI < nums.length; extI++) {
      let res = 0;
      for (let intI = extI; intI < nums.length; intI++) {
        sum = (sum && sum !== 0 && intI === extI) ? sum : nums[intI];
        res = res + nums[intI];
        if (res > sum) sum = res;
      }
    }
    return sum;
  };

  var maxSubArray2 = function(nums) {
    let currentSum = 0;
    let maxSumRange = -Infinity;
    for (let i = 0; i < nums.length; i++) {
      currentSum = currentSum + nums[i];
      if (currentSum > maxSumRange) {
        maxSumRange = currentSum
      }
      if (currentSum < 0) {
        currentSum = 0
      }
    }
    return maxSumRange;
  };