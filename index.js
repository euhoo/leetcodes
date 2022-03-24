var isPalindrome = function(x) {
  if (x < 0) return false;
  const arrList = x.toString().split('');
  const isNatural = !arrList.find(s => s === ',' || s === '.');
  if (!isNatural) return false;
  const reversedArr = arrList.map((item, index) => arrList[arrList.length - index - 1])
  return !arrList.find((i, ind) => i !== reversedArr[ind])
};
const twoSum = (nums, target) => {
  const res = [];
  try {
    nums.forEach((numLvl1, iLvl1) => {
      nums.forEach((numLvl2, ilvl2) => {
        if (ilvl2 === iLvl1) return;
        if (numLvl1 + numLvl2 === target) {
          res.push(iLvl1);
          res.push(ilvl2);
          throw new Error;
        }
      });
    })
  } catch (e) {
    return res;
  }
}

const isValidBracketsParentheses = s => {
  const parentnessMap = {
    ')': '(',
    ']': '[',
    '}': '{',
  }
  try {
    let res = s.split('');
    for (let i = 0; i <= s.length; i) {
      const key = res[i];
      const value = parentnessMap[key];

      if (value && res[i - 1] === value) {
        res.splice(i - 1, 2);
        i -= i;
        continue;
      }
      i += 1;
    }
    return res.length === 0;
  } catch (e) {
    return false
  }
}
const romanToInt = (str) => {
  const digitsMap = {
    'M': 1000,
    'D': 500,
    'C': 100,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1,
  }
  let prev = digitsMap[str[str.length - 1]];
  return str
    .split('')
    .reverse()
    .map(symb => digitsMap[symb])
    .reduce((acc, current) => {
      const res = current < prev ? acc - current : acc + current;
      prev = current;
      return res;
    })
};
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

const removeDuplicates = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    if (i === nums.length - 1) continue;
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1)
      i = i - 1;
    }
  }
  return nums.length;
}
var findMedianSortedArrays = function(nums1, nums2) {
  const unionArray = [...nums1, ...nums2].sort((a, b) => a < b ? -1 : 1);
  const length = unionArray.length;
  const isOneMedian = length % 2 !== 0;
  if (isOneMedian) return unionArray[(length - 1) / 2];
  const firstNum = unionArray[(length) / 2];
  const secondNum = unionArray[(length) / 2 - 1];
  return (firstNum + secondNum) / 2;
};

var removeElement = function(nums, val) {
  for ( let i = 0; i < nums.length; i){
    if(nums[i] === val) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
  return nums.length;
};
var strStr = function(haystack, needle) {
  return haystack.indexOf(needle);
};
var searchInsert = function(nums, target) {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === target) return i;
    if (nums[i] > target) return i;
    i++;
  }
  return i;
};
var maxSubArray = function(nums) {

};
const nums = [-2,1,-3,4,-1,2,1,-5,4];
const nums2 = [1];
const nums3 = [5,4,-1,7,8];
console.log(maxSubArray(nums)); // 6
console.log(maxSubArray(nums2)); // 1
console.log(maxSubArray(nums3)); // 23
