var reverseBits = function(num) {
    const n = num.toString()
    console.log(n);
  
    const l = n.length;
    let sum = 0;
    for (let i = 0; i < l; i++) {
      const index = l - i - 1
      const symb = n[index];
      if (symb === '1') {
        const currentSum = Math.pow(2, index);
        sum += currentSum;
      }
    }
    return sum
  };