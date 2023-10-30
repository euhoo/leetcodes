var mySqrt = function(x) {
    for (let i = 1; i < 65537; i++) {
      if (i * i > x) return i - 1;
    }
  };