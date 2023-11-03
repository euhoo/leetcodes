// https://leetcode.com/problems/length-of-last-word/description/
// EASY
//  25.03.22
var lengthOfLastWord2 = function(s: string): number {
    const str = s
      .trim()
      .split(' ')
      .reverse()
      .join(' ')
    const indexOf = str.indexOf(' ');
    return indexOf === -1 ? str.length : indexOf;
  };
//  02.11.23

 export function lengthOfLastWord(s: string): number {
    return s
      .trim()
      .split(' ')
      .reverse()[0]
      .length
};