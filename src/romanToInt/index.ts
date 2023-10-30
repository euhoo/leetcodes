export const romanToInt = (str) => {
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