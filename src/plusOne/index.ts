
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
      const current = digits[i];
      if (current === 9) {
        digits[i] = 0;
        if (i === 0) {
          digits.unshift(1);
          break;
        }
      } else {
        digits[i] += 1;
        break;
      }
    }
    return digits;
  };