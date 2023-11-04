// https://leetcode.com/problems/climbing-stairs/description/
//  EASY

// var climbStairs2 = function(n) {
//     let nMinus2Res = 0;
//     let nMinus1Res = 1;
//     if (n === 0) return 0;
//     if (n === 1) return nMinus1Res;
//     for (let i = 1; i < 46; i++) {
//       const newNMinus1 = nMinus1Res + nMinus2Res;
//       if (i === n) return newNMinus1;
//       nMinus2Res = nMinus1Res;
//       nMinus1Res = newNMinus1
//     }
//   };

// Рекурсивно через числа фиббоначи;
// при больших числах долго работает
// 03.11.23

export function climbStairs2(n: number): number {
    return (n <= 2) ? n : climbStairs(n-1) + climbStairs(n-2)
};

//Тоже числа фиббоначи, но цикл, а не рекурсия
// 03.11.23
export function climbStairs3(n: number): number {
  if (n === 1) return n;
  let a = 1;
  let b = 2;
  for (let i = 3 ; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b
};
// рекурсия без подсчета на каждом щаге
// 04.11.23
export function climbStairs(n: number): number {
  if (n < 3) return n;
  const fib = (a: number, b:number, i: number): number => {
    if (i === n) return a + b;
    return fib(a + b, a, i + 1)
  }
  return fib(2, 1, 3)
}