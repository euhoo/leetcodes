// https://leetcode.com/problems/longest-common-prefix/description/
// EASY
// 14/03/22
export const longestCommonPrefix = (strs: string[]): string => strs
  .reduce((acc: string, current: string) => current.length < acc.length ? current : acc, strs[0])
  .split('')
  .reduce((longestCommon: string, currentSymb: string) => {
    const currentTry = longestCommon + currentSymb;
    const isAllWordsContainCommon = strs
      .map((s: string) => s.startsWith(currentTry))
      .filter((v: boolean) => !v).length === 0;
    return isAllWordsContainCommon ? currentTry : longestCommon
  }, '');












// 02/11/23
export const longestCommonPrefix2 = (strs: string[]): string => {
    let longestStr = strs[0];
    for (let str of strs) {
        if(!longestStr) return '';
        for (let i = 0; i < longestStr.length; i++) {
            if (!str[i] || longestStr[i] !== str[i]) {
              longestStr = longestStr.substring(0, i)
              continue;
            }
        }
    }

    return longestStr;
};