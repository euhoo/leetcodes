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