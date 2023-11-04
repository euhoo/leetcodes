// https://leetcode.com/problems/number-of-1-bits/description/
// EASY
// 04/11/23
function hammingWeight(n: number): number {
    return n
          .toString(2)
          .split('')
          .filter(v => v === '1')
          .length
};