// https://leetcode.com/problems/n-th-tribonacci-number/description/
//  EASY
// 27/03/22
var tribonacci1 = function(n) {
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

// 07/11/23

  function tribonacci(n: number): number {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 1;
    if (n === 3) return 2;
    const a = 2;
    const b = 1;
    const c = 1;
    const currentN = 4;
    const fib = (a: number, b: number, c: number, currentN: number): number => {
        if (currentN === n) return a + b + c;
        return fib(a + b + c, a , b, currentN + 1);
    }
    return fib(a, b, c, currentN)
};