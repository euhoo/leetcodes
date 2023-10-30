var tribonacci = function(n) {
    let nMinus3Res = 0;
    let nMinus2Res = 1;
    let nMinus1Res = 1;
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 1;
    for (let i = 3; i < 38; i++) {
      const newNMinus1 = nMinus1Res + nMinus2Res + nMinus3Res;
      if (i === n) return newNMinus1;
      nMinus3Res = nMinus2Res;
      nMinus2Res = nMinus1Res;
      nMinus1Res = newNMinus1
    }
  };