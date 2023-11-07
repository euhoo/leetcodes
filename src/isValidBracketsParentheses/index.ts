// https://leetcode.com/problems/valid-parentheses/submissions/
// EASY

// 13.11.23
export const isValidBracketsParentheses = (s: string): boolean => {
    const parentnessMap:Record<string, string> = {
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
// 05.11.23
  export function isValid1(s: string): boolean {
    const bracketsArr = s.split('');
    const parentnessMap: Record<string, string> = {
            ')': '(',
            ']': '[',
            '}': '{',
          }
    for(let i = 0; i < bracketsArr.length; i) {
      if (i < 0) return false;
      const value = parentnessMap[bracketsArr[i]];
      if (value){
        const prev = bracketsArr[i - 1];
        if (prev!== value) return false;
        bracketsArr.splice(i - 1, 2);
        i--
      }
      i++
    }
    return bracketsArr.length === 0;
  }

  // 05/11/23
  // решение через stack
  export function isValid(s: string): boolean {
    const parentnessMap: Record<string, string> = {
            ')': '(',
            ']': '[',
            '}': '{',
          }
    let openStack: string[] = [];
    for(let i = 0; i < s.length; i++) {
      const key = s[i];
      const value = parentnessMap[key];

      if (!value) {
            openStack.push(key);
            continue
        }
        const stackValue = openStack.pop();
        console.log('stackValue', stackValue)

        if (stackValue !== value) return false

    }
    return openStack.length === 0;
}