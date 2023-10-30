const longestCommonPrefix = (strs) => strs
  .reduce((acc, current) => current.length < acc.length ? current : acc, strs[0])
  .split('')
  .reduce((longestCommon, currentSymb) => {
    const currentTry = longestCommon + currentSymb;
    const isAllWordsContainCommon = strs
      .map(s => s.startsWith(currentTry))
      .filter(v => v === false).length === 0;
    return isAllWordsContainCommon ? currentTry : longestCommon
  }, '');