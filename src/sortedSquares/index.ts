var sortedSquares = function(nums) {
    return nums.map(n => n * n).sort((a, b) => a < b ? -1 : 1);
  };