export const isValidBracketsParentheses = s => {
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