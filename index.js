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
  for (let i = 0; i < nums.length; i) {
    if (nums[i] === val) {
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
  let sum;
  for (let extI = 0; extI < nums.length; extI++) {
    let res = 0;
    for (let intI = extI; intI < nums.length; intI++) {
      sum = (sum && sum !== 0 && intI === extI) ? sum : nums[intI];
      res = res + nums[intI];
      if (res > sum) sum = res;
    }
  }
  return sum;
};
var lengthOfLastWord = function(s) {
  const str = s
    .trim()
    .split(' ')
    .reverse()
    .join(' ')
  const indexOf = str.indexOf(' ');
  return indexOf === -1 ? str.length : indexOf;
};
var maxSubArray2 = function(nums) {
  let currentSum = 0;
  let maxSumRange = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    currentSum = currentSum + nums[i];
    if (currentSum > maxSumRange) {
      maxSumRange = currentSum
    }
    if (currentSum < 0) {
      currentSum = 0
    }
  }
  return maxSumRange;
};
var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    const current = digits[i];
    if (current === 9) {
      digits[i] = 0;
      if (i === 0) {
        digits.unshift(1);
        break;
      }
    } else {
      digits[i] += 1;
      break;
    }
  }
  return digits;
};

var addBinary = function(a, b) {
  const diff = a.length - b.length;
  const left = diff > 0 ? a : '0'.repeat(Math.abs(diff)) + a;
  const right = diff < 0 ? b : '0'.repeat(Math.abs(diff)) + b;
  const length = right.length;
  let res = '';
  const map = {
    '00': '0',
    '10': '1',
    '01': '1',
    '11': '0',
  }
  let plusOne = false;
  for (let i = length - 1; i >= 0; i--) {
    const l = left[i];
    const r = right[i];
    const sum = l + r;
    const currentRes = map[sum];
    const sumPlusOne = plusOne ? '1' + currentRes : '0' + currentRes
    const resWithPlusOne = map[sumPlusOne]
    plusOne = sum === '11' || sumPlusOne === '11';
    res = `${resWithPlusOne}${res}`
  }
  if (plusOne) res = `1${res}`
  return res;
};
var mySqrt = function(x) {
  for (let i = 1; i < 65537; i++) {
    if (i * i > x) return i - 1;
  }
};
var climbStairs = function(n) {
  let nMinus2Res = 0;
  let nMinus1Res = 1;
  if (n === 0) return 0;
  if (n === 1) return nMinus1Res;
  for (let i = 1; i < 46; i++) {
    const newNMinus1 = nMinus1Res + nMinus2Res;
    if (i === n) return newNMinus1;
    nMinus2Res = nMinus1Res;
    nMinus1Res = newNMinus1
  }
};
var tribonacci = function(n) {
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
var fib = function(n) {
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
var merge = function(nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
    nums1[i + m] = nums2[i]
  }
  nums1.sort((a, b) => a < b ? -1 : 1)
};
var sortedSquares = function(nums) {
  return nums.map(n => n * n).sort((a, b) => a < b ? -1 : 1);
};
const nums1 = [-4, -1, 0, 3, 10];
const nums2 = [-7, -3, 2, 3, 11];
console.log(sortedSquares(nums1)); //[0,1,9,16,100]
console.log(sortedSquares(nums2)); //[4,9,9,49,121]
