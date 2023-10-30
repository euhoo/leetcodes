var maximumDifference = function(nums) {
    let maxProfit = -1;
    if (nums.length === 0 || nums.length === 1) return maxProfit;
    let leftMarker = nums[0];
    for (let i = 1; i < nums.length; i++) {
      const price = nums[i];
      if (leftMarker >= price) {
        leftMarker = price;
      } else {
        const currentProfit = price - leftMarker;
        maxProfit = maxProfit > currentProfit ? maxProfit : currentProfit;
      }
    }
    return maxProfit;
  };