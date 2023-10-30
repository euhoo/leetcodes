export const isPalindrome = (x) => {
    if (x < 0) return false;
    const arrList = x.toString().split('');
    const isNatural = !arrList.find(s => s === ',' || s === '.');
    if (!isNatural) return false;
    const reversedArr = arrList.map((item, index) => arrList[arrList.length - index - 1])
    return !arrList.find((i, ind) => i !== reversedArr[ind])
  };