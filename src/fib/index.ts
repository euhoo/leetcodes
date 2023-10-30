var fib = function(n) {
    let nMinus2Res = 0;
    let nMinus1Res = 1;
    if (n === 0) return 0;
    if (n === 1) return nMinus1Res;
    if (n === 2) return nMinus1Res;
    for (let i = 2; i < 46; i++) {
      const newNMinus1 = nMinus1Res + nMinus2Res;
      if (i === n) return newNMinus1;
      nMinus2Res = nMinus1Res;
      nMinus1Res = newNMinus1
    }
  };