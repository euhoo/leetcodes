// https://leetcode.com/problems/reverse-bits/description/
// EASY

// 04/11/23
  export function reverseBits(n: number): number {
    const str = n
          .toString(2)
          .padStart(32, '0')
          .split('')
          .reverse()
          .join('')
    return parseInt(str, 2)
  };