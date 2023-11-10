// https://leetcode.com/problems/fibonacci-number/description/
// EASY

// 27/03/22
var fib1 = function(n) {
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

// 07/11/23
function fib(n: number): number {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 1;
    const a = 1;
    const b = 1;
    const currentN = 3;
    const fibonacci = (a: number, b: number, currentN: number): number => {
        if( currentN === n) return a + b;
        return fibonacci(a + b, a, currentN + 1);
    }
    return fibonacci(a, b, currentN)
};