var missingNumber = function(nums) {
    const l = nums.length;
    const sum = (l + 1) / 2 * l;
    const currentSum = nums.reduce((acc, current) => acc + current, 0);
    return sum - currentSum;
  };