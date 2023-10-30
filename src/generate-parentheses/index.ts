

import { DataI, TaskTypes } from "../../models";
type FuncT = (n: number) => [string, string]
const calculateMinMax = (n: number): [string, string] => {
    const length = n * 2;
    let max10 = '';
    let min10 = '';
    for(let i = length; i > 0; i--) {
      i > n ?  max10 += '1' : max10 += '0';
      i % 2 === 0 ? min10 += '1' : min10 += '0'
    }
    return [min10, max10]
  }
  const make10from2 = (str: string): number => str
      .split('')
      .reduce((acc, symb, currentIndex) =>
        symb === '0' ? acc : acc + Math.pow(2, str.length - currentIndex - 1) , 0);
  
  const checkParentness = (str2: string): boolean => {
    let sum = 0
    for (let symb of str2) {
      if (symb === '0') sum -= 1;
      if (symb === '1') sum += 1;
      if (sum < 0) return false;
    }
    return sum === 0;
  }
  const convertToBrackets = (str2: string) => str2
    .split('')
    .reduce((acc, current) => current === '0' ? acc + ')' : acc + '(', '')
  
  const getRes = (min10: number, max10: number, n: number) => {
    const res: string[] = [];
    // 1. идем от минимального к максимальному с шагом +2
    for (let i = max10; i >= min10; i -= 2) {
    // 2. переводим в двоичную систему
      const i2 = i.toString(2)
    // 3. проверяем Парность
    // 4. если парное - пушим в результирующий массив
      checkParentness(i2) && res.push(convertToBrackets(i2))
    }
    return res;
  }
  const generateParenthesis = (n: number): [string, string] => {
    const [min, max] = calculateMinMax(n);
    const min10 = make10from2(min);
    const max10 = make10from2(max);
    return getRes(min10, max10, n);
  }
  export const generateParenthesisData: DataI<FuncT> = {
    funcs: [generateParenthesis],
    description: `
    /*
* 
* Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
 

Constraints:

1 <= n <= 8
* */
`,
date: '19.10.2023',
type: TaskTypes.MEDIUM,
learnThemes: [],
url: 'https://leetcode.com/problems/generate-parentheses/'
  }