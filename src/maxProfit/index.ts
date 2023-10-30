var maxProfit = function(prices) {
    let maxProfit = 0;
    if (prices.length === 0) return 0;
    let leftMarker = prices[0];
    for (let i = 0; i < prices.length; i++) {
      const price = prices[i];
      if (leftMarker > price) {
        leftMarker = price;
      } else {
        const currentProfit = price - leftMarker;
        maxProfit = maxProfit > currentProfit ? maxProfit : currentProfit;
      }
    }
    return maxProfit;
  };